import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/nav-pages/about/about.component';
import { BlogComponent } from './components/nav-pages/blog/blog.component';
import { Blog1Component } from './components/nav-pages/blog/blog-pages/blog1/blog1.component';
import { TrainingComponent } from './components/nav-pages/training/training.component';
import { ContactComponent } from './components/nav-pages/contact/contact.component';
import { WebComponent } from './components/service-pages/web/web.component';
import { MobileComponent } from './components/service-pages/mobile/mobile.component';
import { BrandingComponent } from './components/service-pages/branding/branding.component';
import { MarketingComponent } from './components/service-pages/marketing/marketing.component';
import { SalezifyComponent } from './components/product-pages/salezify/salezify.component';
import { KapsmartComponent } from './components/product-pages/kapsmart/kapsmart.component';
import { PressbellComponent } from './components/work-pages/pressbell/pressbell.component';
import { EwasteComponent } from './components/work-pages/ewaste/ewaste.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    Blog1Component,
    TrainingComponent,
    ContactComponent,
    WebComponent,
    MobileComponent,
    BrandingComponent,
    MarketingComponent,
    SalezifyComponent,
    KapsmartComponent,
    PressbellComponent,
    EwasteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
