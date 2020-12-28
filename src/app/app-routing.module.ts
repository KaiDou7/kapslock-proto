import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//home
import { HomeComponent } from './components/home/home.component';

//nav-pages
import { AboutComponent } from './components/nav-pages/about/about.component';
import { BlogComponent } from './components/nav-pages/blog/blog.component';
import { ContactComponent } from './components/nav-pages/contact/contact.component';
import { TrainingComponent } from './components/nav-pages/training/training.component';

//product-pages
import { KapsmartComponent } from './components/product-pages/kapsmart/kapsmart.component';
import { SalezifyComponent } from './components/product-pages/salezify/salezify.component';

//service-pages
import { BrandingComponent } from './components/service-pages/branding/branding.component';
import { MarketingComponent } from './components/service-pages/marketing/marketing.component';
import { MobileComponent } from './components/service-pages/mobile/mobile.component';
import { WebComponent } from './components/service-pages/web/web.component';

//work-pages
import { EwasteComponent } from './components/work-pages/ewaste/ewaste.component';
import { PressbellComponent } from './components/work-pages/pressbell/pressbell.component';

//blog pages
import { Blog1Component } from './components/nav-pages/blog/blog-pages/blog1/blog1.component';


const routes: Routes = [
  //home
  { path: '', component: HomeComponent },

  //nav-pages
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'training', component: TrainingComponent },

  //product-pages
  { path: 'kapsmart', component: KapsmartComponent },
  { path: 'salezify', component: SalezifyComponent },

  //service-pages
  { path: 'branding', component: BrandingComponent },
  { path: 'social-media-marketing', component: MarketingComponent },
  { path: 'mobile-app-development', component: MobileComponent },
  { path: 'web-design-and-development', component: WebComponent },

  //work-pages
  { path: 'ewaste', component: EwasteComponent },
  { path: 'pressbell', component: PressbellComponent },

  //blog-pages
  { path: 'blog1', component: Blog1Component }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
