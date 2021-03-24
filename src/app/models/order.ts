import { Time } from "@angular/common";

export interface Order{
  customer_id?:string;
  customer_name?:string;
  address_ln1?:string;
  address_ln2?:string;
  city?:string;
  province?:string;
  invoice_no?:string;
  item_type?:string;
  order_date?:Date;
  route?:string;
  sales_agent?:string;
  sa_id:String;
  driver?:string;
  driver_id?:string;
  status?:string;
  distance?:number;
  photo_URL?:string;
  note?:string;
  // pending_completed_time?:Time;
}
