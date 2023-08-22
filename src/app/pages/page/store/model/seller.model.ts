export interface Seller {
  id?: string;
  store: Store;
  userCredential: UserCredential;
}

export interface Store {
  id?: string;
  noSiup: string;
  name: string;
  address: string;
  domain: string;
  mobilePhone: string;
}

export interface UserCredential {
  id?: string;
  username: string;
  email: string;
}
