//Creating driver model
export interface Driver{
  first_name?:string;
  last_name?:string;
  license_no?:string;
  license_expiry?:Date;
  email?:string;
  address_ln1?:string;
  address_ln2?:string;
  city?:string;
  mobile_no?:string;
  dob?:Date;
  employee_id?:string;
  assigned?:boolean;
  assigned_route?:string;
  vehicle?:string;
}
