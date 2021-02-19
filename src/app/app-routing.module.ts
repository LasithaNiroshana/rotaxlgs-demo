import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewcustomersComponent } from './pages/customers/viewcustomers/viewcustomers.component';
import { AddcustomersComponent } from './pages/customers/addcustomers/addcustomers.component';
import { CustomertableComponent } from './pages/customers/customertable/customertable.component';
import { AdddisroutesComponent } from './pages/disroutes/adddisroutes/adddisroutes.component';
import { ViewdisroutesComponent } from './pages/disroutes/viewdisroutes/viewdisroutes.component';
import { AdddriversComponent } from './pages/drivers/adddrivers/adddrivers.component';
import { ViewdriversComponent } from './pages/drivers/viewdrivers/viewdrivers.component';
import { DriverstableComponent } from './pages/drivers/driverstable/driverstable.component';
import { MainloginComponent } from './pages/login/mainlogin/mainlogin.component';
import { SigninComponent } from './pages/login/signin/signin.component';
import { SignupComponent } from './pages/login/signup/signup.component';
import { AdminhomeComponent } from './pages/adminhome/adminhome.component';
import { AddordersComponent } from './pages/orders/addorders/addorders.component';
import { ViewordersComponent } from './pages/orders/vieworders/vieworders.component';
import { OrderstableComponent } from './pages/orders/orderstable/orderstable.component';
import { AddsalesagentsComponent } from './pages/salesagents/addsalesagents/addsalesagents.component';
import { ViewsalesagentsComponent } from './pages/salesagents/viewsalesagents/viewsalesagents.component';
import { SalesagentstableComponent } from './pages/salesagents/salesagentstable/salesagentstable.component';
import { AddvehiclesComponent } from './pages/vehicles/addvehicles/addvehicles.component';
import { ViewvehiclesComponent } from './pages/vehicles/viewvehicles/viewvehicles.component';
import { VehiclestableComponent } from './pages/vehicles/vehiclestable/vehiclestable.component';
import { AdmindashboardComponent } from './pages/adminhome/admindashboard/admindashboard.component';
import { RoutetableComponent } from './pages/disroutes/routetable/routetable.component';
<<<<<<< HEAD
import { SalesagenthomeComponent } from './pages/salesagenthome/salesagenthome.component';
import { SalesagenthometabelComponent } from './pages/salesagenthome/salesagenthometabel/salesagenthometabel.component';

=======
import { DrivershomeComponent } from './pages/drivershome/drivershome.component';
import { DrdeliverylistComponent } from './pages/drivershome/drdeliverylist/drdeliverylist.component';
>>>>>>> 46b858e820b9e15594ae29f4c6a33615abdbaade

const routes: Routes = [
  {path:'adminhome',component:AdminhomeComponent,
  children:[
    {path:'admindashboard',component:AdmindashboardComponent},
    {path:'viewcustomers',component:ViewcustomersComponent},
    {path:'viewdisroutes',component:ViewdisroutesComponent},
    {path:'viewdrivers',component:ViewdriversComponent},
    {path:'vieworders',component:ViewordersComponent},
    {path:'viewsalesagents',component:ViewsalesagentsComponent},
    {path:'viewvehicles',component:ViewvehiclesComponent},
  ]
},
{path:'drivershome',component:DrivershomeComponent,
children:[
  {path:'drdeliverylist',component:DrdeliverylistComponent}
]},
  {path:'**',component:MainloginComponent},
  {path:'addcustomers',component:AddcustomersComponent},
  {path:'customerstable',component:CustomertableComponent},
  {path:'adddisroutes',component:AdddisroutesComponent},
  {path:'adddrivers',component:AdddriversComponent},
  {path:'driverstable',component:DriverstableComponent},
  {path:'addorders',component:AddordersComponent},
  {path:'orderstable',component:OrderstableComponent},
  {path:'addsalesagents',component:AddsalesagentsComponent},
  {path:'slesagentstable',component:SalesagentstableComponent},
  {path:'addvehicles',component:AddvehiclesComponent},
  {path:'vehiclestable',component:VehiclestableComponent},
  {path:'routetable',component:RoutetableComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'salesagenthome',component: SalesagenthomeComponent,
    children:[
    {path: 'salesagenthometable', component: SalesagenthometabelComponent}
]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[
  AdminhomeComponent,
  AdmindashboardComponent,
 ViewcustomersComponent,
 AddcustomersComponent,
 CustomertableComponent,
 ViewdisroutesComponent,
 AdddisroutesComponent,
 ViewdriversComponent,
 AdddriversComponent,
 DriverstableComponent,
 ViewordersComponent,
 AddordersComponent,
 OrderstableComponent,
 ViewsalesagentsComponent,
 AddsalesagentsComponent,
 SalesagentstableComponent,
 ViewvehiclesComponent,
 AddvehiclesComponent,
 VehiclestableComponent,
 MainloginComponent,
 SigninComponent,
 SignupComponent,
 RoutetableComponent,
<<<<<<< HEAD
 SalesagenthomeComponent,
 SalesagenthometabelComponent
=======
 DrivershomeComponent
>>>>>>> 46b858e820b9e15594ae29f4c6a33615abdbaade
]
