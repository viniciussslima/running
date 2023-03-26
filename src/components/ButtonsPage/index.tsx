import React, { useMemo } from 'react';

import { nanoid } from 'nanoid';

import { ButtonContainer, Button } from './styles';

interface ButtonsPage {
  pages: number;
  changePage: (newPage: number) => void;
  currentPage: number;
  className?: string;
}

export const ButtonsPage: React.FC<ButtonsPage> = ({
  pages,
  changePage,
  currentPage,
  className,
}) => {
  const buttons = useMemo(() => {
    const newButtons = [];

    if (currentPage !== 1) {
      newButtons.push(
        <Button
          key={nanoid()}
          className={className}
          onClick={() => changePage && changePage(1)}
        >
          {'<<'}
        </Button>
      );

      newButtons.push(
        <Button
          key={nanoid()}
          className={className}
          onClick={() =>
            changePage && changePage(currentPage ? currentPage - 1 : 0)
          }
        >
          {'<'}
        </Button>
      );
    }

    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      if (i > 0 && i <= pages) {
        newButtons.push(
          <Button
            key={nanoid()}
            className={className}
            onClick={() => changePage && changePage(i)}
            disabled={currentPage === i}
          >
            {i}
          </Button>
        );
      }
    }

    if (currentPage !== pages) {
      newButtons.push(
        <Button
          key={nanoid()}
          className={className}
          onClick={() =>
            changePage && changePage(currentPage ? currentPage + 1 : 0)
          }
        >
          {'>'}
        </Button>
      );

      newButtons.push(
        <Button
          key={nanoid()}
          className={className}
          onClick={() => changePage && changePage(pages)}
        >
          {'>>'}
        </Button>
      );
    }

    return newButtons;
  }, [changePage, className, currentPage, pages]);

  return <ButtonContainer>{buttons}</ButtonContainer>;
};
