//Creating distribution routes model
export interface Disroute{
  route_id?:string;
  route_name?:string;
  cities?:Array<string>;
  driver?:string;
  driver_id?:string;
}
