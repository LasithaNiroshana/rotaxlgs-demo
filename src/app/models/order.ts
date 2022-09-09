import { Time } from "@angular/common";
//Creating order model
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
  driver?:string;
  driver_id?:string;
  status?:string;
  distance?:number;
  photo_URL?:string;
  note?:string;
  po_no?:string;
  // pending_completed_time?:Time;
}
