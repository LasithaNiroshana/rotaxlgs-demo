import { Time } from "@angular/common";

export interface Order{
  id:String,
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
  status?:string;
  distance?:number;
  photo_URL?:string;
  note?:string;
  // pending_completed_time?:Time;
}
