import { Routes } from '@angular/router';
import { MainLayoutComponent } from './portfolio/components/main-layout/main-layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { BlogComponent } from './blog/components/blog/blog.component';

export const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [] },
  { path: 'blog', component: BlogComponent, children: [] },
  { path: '**', component: NotFoundComponent },
];
