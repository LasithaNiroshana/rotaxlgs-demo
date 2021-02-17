export interface User{
  first_name?:string;
  last_name?:string;
  uid?:string;
  mobile_no?:string;
  email?:string;
  password?:string;
  role?:Roles;
  photo_url?:string;
}

export interface Roles{
  admin?:boolean;
  driver?:boolean;
  store_keeper?:boolean;
  sales_agent?:boolean;
}
