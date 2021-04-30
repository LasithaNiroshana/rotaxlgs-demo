import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {OrdersService} from '../../../services/orders.service';
import { Order } from '../../../models/order';
import { Customer } from 'src/app/models/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { SalesagentsService } from 'src/app/services/salesagents.service';
import { Salesagent } from 'src/app/models/salesagents';
import { DisroutsService } from 'src/app/services/disroutes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DriversService } from 'src/app/services/drivers.service';
import {Driver} from '../../../models/drivers';
import { Disroute } from 'src/app/models/disroutes';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-addorders',
  templateUrl: './addorders.component.html',
  styleUrls: ['./addorders.component.scss']
})
export class AddordersComponent implements OnInit {
  @ViewChild('callOKDialog') callOKDialog: TemplateRef<any>;
  [x: string]: any;
  customers:Customer[];
  sales_agents: Salesagent[];
  drivers:Driver[];
  city:any;
  routes:Disroute[];

  order:Order={
  customer_id:'',
  customer_name:'',
  address_ln1:'',
  address_ln2:'',
  city:'',
  province:'',
  invoice_no:'',
  item_type:'',
  order_date:new Date(),
  route:'',
  driver:'',
  driver_id:'',
  status:'',
  distance: 0,
  photo_URL:'',
  po_no:''
  }

  constructor(private ordersService:OrdersService,
    private customerService: CustomersService,
    private salesagentService: SalesagentsService,
    private driversService:DriversService,
    private routeService: DisroutsService,
    private router:Router,
    private acr:ActivatedRoute,
    private snackBar:MatSnackBar,
    private dialog:MatDialog,
    private afs:AngularFirestore
    ) { }

  ngOnInit(): void {
    // this.salesagentService.getSalesagents().subscribe(sa=>{
    // this.sales_agents = [];
    // if(sa.length > 0){
    //   sa.forEach(SA=>{
    //     let SalesAgent:any=SA.payload.doc.data();
    //     this.sales_agents.push(SalesAgent);
    //   });
    // }});
    this.routeService.getRoutes().subscribe(rou=>{
      this.routes=[];
      rou.forEach(r=>{
        let route:any = r.payload.doc.data();
        route.id = r.payload.doc.id;
        this.routes.push(route);
      })
    });

    this.driversService.getDrivers().subscribe(driv=>{
      this.drivers=[];
      driv.forEach(d=>{
        let driver:any=d.payload.doc.data();
        driver.id=d.payload.doc.id;
        this.drivers.push(driver);
      });
    });
  }
    // this.salesagentService.getSalesagents().subscribe(salesagents=>
    //   {
    //     console.log(salesagents);
    //     this.sales_agent=salesagents;
    //   });


//   routeSelector(){
//     this.order.route = ''
//     let r1 = ['Kelaniya','Kadawatha','Kegalle','Kadugannawa','Peradeniya','Gannoruwa','Kandy'];
//     let r2 = ['Bambalapitiya','Kollupitiya','Dehiwala','Mount Lavinia','','Kauthara','Benthara','Galle','Matara','Hambantota','Tangalle'];
//     let r3=['Wattala','Ragama','Kandana','Ja-Ela','Negombo','Katunayake'];
//     if(r1.includes(this.order.city)){
//       this.order.route='R1';
//     }
//     else if(r2.includes(this.order.city)){
//       this.order.route='R2';
//     }
//     else if(r3.includes(this.order.city)){
//       this.order.route='R3';
//     }
//     else this.order.route='R4';
// console.log(this.order.route);

//   }

  reset(){
    this.order.po_no='';
    this.order.invoice_no='';
this.order.customer_id='';
this.order.customer_name='';
this.order.address_ln1='';
this.order.address_ln2='';
this.order.city='';
this.order.province='';
this.order.route='';
this.order.status='';
this.order.item_type='';
  }

  onSubmit() {
    if (this.order.invoice_no != ''
    && this.order.po_no !=''
      && this.order.customer_id != ''
      && this.order.customer_name != ''
      && this.order.address_ln1 != ''
      && this.order.address_ln2 != ''
      && this.order.city != ''
      && this.order.province != ''
      && this.order.driver != ''
      && this.order.status != '') {
      this.ordersService.getspOrder(this.order.invoice_no).snapshotChanges().subscribe(ord => {
        if (ord.length > 0) {
          this.openSnackBar('This invoice number is already been added!','');
        } else {
          try {
            this.ordersService.addOrder(this.order);
            this.openSnackBar('New order has been added successfully.','');
            this.order.invoice_no = '';
            this.order.customer_id = '';
            this.order.customer_name = '';
            this.order.address_ln1 = '';
            this.order.address_ln2 = '';
            this.order.city = '';
            this.order.province = '';
            this.order.route = '';
            this.order.status = '';
            this.order.item_type = '';
            this.order.route='';
            this.order.driver='';
              this.order.driver_id='';
          }
          catch (error) {
            this.openSnackBar(error,'');
          }
        }
      });
      // this.afs.doc(`drivers/${this.order.driver_id}`).update('')
    } else {
      this.openSnackBar('Please fill in the fields','');
    }
  }

  search(){
    this.customerService.getspcustomer(this.order.customer_id).snapshotChanges().subscribe(cus=>{
      this.customers=[];
      if(cus.length>0){
      cus.forEach(c=>{
        let customer:any=c.payload.doc.data();
        customer.id=c.payload.doc.id;
        this.customers.push(customer);
        this.order.customer_name=customer.name;
        this.order.address_ln1=customer.address_ln1;
        this.order.address_ln2=customer.address_ln2;
        this.order.city=customer.city;
        this.order.province=customer.province;
        this.order.distance =customer.distance;
        this.routeService.getroute(customer.city).snapshotChanges().subscribe(rou=>{
          this.routes=[];
          if(rou.length>0){
            rou.forEach(r=>{
              let disroute:any=r.payload.doc.data();
              disroute.id=r.payload.doc.id;
              this.routes.push(disroute);
              this.order.route=disroute.route_name;
              this.order.driver=disroute.driver;
              this.order.driver_id=disroute.driver_id;
            });
          }else{
            this.openSnackBar('There is no route assigned for the city','');
          }
          });
  });
}else{
   this.callDialog();
  }
});
}

searchDrivers(){
//   this.driversService.getspDriver(this.order.driver_id).snapshotChanges().subscribe(driv=>{
//     this.drivers=[];
//     if(driv.length>0){
//     driv.forEach(d=>{
//       let driver:any=d.payload.doc.data();
//       driver.id=d.payload.doc.id;
//       this.drivers.push(driver);
//       this.order.driver=this.driver.first_name+ ' ' + this.driver.last_name;
// });
// }else{
//  this.callDialog();
// }
// });
}

// route() {
//   this.routeService.getroute(this.order.city).snapshotChanges().subscribe(route =>{
//     try {
//       this.routes = [];
//     if(route.length > 0){
//       route.forEach(r => {
//         let route: any= r.payload.doc.data();
//         this.routes.push(route);
//         this.order.route = this.routes[0].route_name;
//       });
//     }
//     } catch (error) {
//       this.openSnackBar(error,'');
//     }
//   })
// }

showupload(){
  this.router.navigate(['bulkupload'],{relativeTo:this.acr});
}

openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {
    duration: 3200,
  });
}

callDialog() {
  this.dialog.open(this.callOKDialog);
}

}
