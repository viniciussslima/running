declare global {
  interface IPaginated<T> {
    count: number;
    previous: string | null;
    next: string | null;
    results: Array<T>;
  }
}

export {};
