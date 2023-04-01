interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  distance: number;
  pace: string;
  overall_position: number;
  age_position: number;
  age_category: string;
  certificate?: string;
  photos?: Array<{
    id: number;
    image: string;
  }>;
}

interface EventsQuery {
  page: number;
  search?: string;
  distance?: number;
  year?: number;
}
