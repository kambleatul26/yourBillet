class Ticket {
  type: string;
  price: number;
  description: string;
  available: number;
}

export interface EventData {
  eventname: string;
  startdate: string;
  time: string;
  loc_lat: number;
  loc_lng: number;
  address: string;
  description: string;
  category: Array<string>;
  tags: Array<string>;
  ticket: Array<Ticket>;
}
