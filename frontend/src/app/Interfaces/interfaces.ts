// export interface Iorders {
//   id?: number;
//   address: string;
//   email: string;
//   Pname: string;
//   Uname: string;
//   password?: string;
//   weight: string;
//   price: string;
//   datetime: string;
//   destination: string;
// }

export interface Iparcel {
  pname: string;
  uname: string;
  price: number;
  id: number;
  weight: number;
  email: string;
  address: string;
  datetime: string;
  destination: string;
}
export interface Iregister {
  address: string;
  id?: number;
  phone: string;
  name: string;
  email: string;
  password: string;
}
export interface Ilogin {
  email: string;
  password: string;
}
export interface Iuser {
  id?: string;
  name: string;
  email: string;
  role: string;
  phone: string;
  password: string;
  address: string;
  destination?: string;
  datetime?: string;
}
export interface userInfo {
  email: string;
  password: string;
}

export interface IUserResponse {
  users: Iuser[];
  success: string;
}

//
