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

const routes: Routes = [
  {path:'adminhome',component:AdminhomeComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'viewcustomers',component:ViewcustomersComponent},
  {path:'addcustomers',component:AddcustomersComponent},
  {path:'customerstable',component:CustomertableComponent},
  {path:'viewdisroutes',component:ViewdisroutesComponent},
  {path:'adddisroutes',component:AdddisroutesComponent},
  {path:'viewdrivers',component:ViewdriversComponent},
  {path:'adddrivers',component:AdddriversComponent},
  {path:'driverstable',component:DriverstableComponent},
  {path:'vieworders',component:ViewordersComponent},
  {path:'addorders',component:AddordersComponent},
  {path:'orderstable',component:OrderstableComponent},
  {path:'viewsalesagents',component:ViewsalesagentsComponent},
  {path:'addsalesagents',component:AddsalesagentsComponent},
  {path:'slesagentstable',component:SalesagentstableComponent},
  {path:'viewvehicles',component:ViewvehiclesComponent},
  {path:'addvehicles',component:AddvehiclesComponent},
  {path:'vehiclestable',component:VehiclestableComponent},
  {path:'mainlogin',component:MainloginComponent},
  {path:'signin',component:SigninComponent},
  {path:'signup',component:SignupComponent},
  {path:'routetable',component:RoutetableComponent}
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
]
