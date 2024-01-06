interface Asset {
  id: number;
  url: string;
}

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
  certificate?: Asset;
  photos?: Array<Asset>;
}

interface EventsQuery {
  page: number;
  search?: string;
  distance?: number;
  year?: number;
}

interface DistancesResponse {
  distances: Array<number>;
}
