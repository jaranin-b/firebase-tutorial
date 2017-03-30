export interface Customer {
  name: string; // required with minimum 5 characters
  address: {
    street?: string; // required
    postcode?: string;
  }
}
