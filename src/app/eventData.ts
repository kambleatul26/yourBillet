class Ticket {
  price: Array<number>;
  description: string;
  available: Array<number>;
}

export interface EventData {
  user: number;
  eventname: string;
  startdate: string;
  time: string;
  loc_lat: number;
  loc_lng: number;
  address: string;
  description: string;
  category: string;
  tags: Array<string>;
  ticket: object;
}
