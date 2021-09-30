
// Types
export type Geo = {
    lat: string;
    lng: string;
  }
  export type Address = {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo : Geo;
    };
  export type company = {
      name: string;
      catchPhrase: string;
      bs: string;
    }
  export type User = {
      id: number;
      name: string;
      username: string;
      email: number;
      address: Address;
      phone: string,
      website: string,
      company:company
    };
  
    export type Users = {
      results: User[];
      total_results: number;
      page: number;
    };