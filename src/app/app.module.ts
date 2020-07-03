import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http'


import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductMockService } from './services/product.mock.service';
import { ProductService } from './services/product.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductMockService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
