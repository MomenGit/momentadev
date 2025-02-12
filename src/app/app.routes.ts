import { Routes } from '@angular/router';
import { MainLayoutComponent } from './portfolio/components/main-layout/main-layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { BlogComponent } from './blog/components/blog/blog.component';
import { HomeComponent } from './portfolio/components/home/home.component';
import { AboutComponent } from './portfolio/components/about/about.component';
import { PortfolioComponent } from './portfolio/components/portfolio/portfolio.component';
import { ContactComponent } from './portfolio/components/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: 'blog', component: BlogComponent, children: [] },
  { path: '**', component: NotFoundComponent },
];
