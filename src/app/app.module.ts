import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {environment} from '../environments/environment';
import { CommonModule } from "@angular/common";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
// import {Chart} from 'chart.js';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdmindashboardComponent } from './pages/adminhome/admindashboard/admindashboard.component';
import { Adminstatcard1Component } from './pages/adminhome/adminstatcard1/adminstatcard1.component';
import { Adminstatcard2Component } from './pages/adminhome/adminstatcard2/adminstatcard2.component';
import { Adminstatcard3Component } from './pages/adminhome/adminstatcard3/adminstatcard3.component';
import { Adminstatcard4Component } from './pages/adminhome/adminstatcard4/adminstatcard4.component';
import { OrdersnumchartComponent } from './pages/adminhome/ordersnumchart/ordersnumchart.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AdmindashchartComponent } from './pages/adminhome/admindashboard/admindashchart/admindashchart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditpopupComponent } from './pages/salesagenthome/editpopup/editpopup.component';
import { DriverpopupComponent } from './pages/drivershome/driverpopup/driverpopup.component';




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AdmindashboardComponent,
    Adminstatcard1Component,
    Adminstatcard2Component,
    Adminstatcard3Component,
    Adminstatcard4Component,
    OrdersnumchartComponent,
    HeaderComponent,
    FooterComponent,
    AdmindashchartComponent,
    EditpopupComponent,
    DriverpopupComponent,

  ],
  entryComponents:[EditpopupComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase,'rotaxlgs-demo'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatCheckboxModule,
    MatTableModule,
    MatMenuModule,
    MatTabsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDialogModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
