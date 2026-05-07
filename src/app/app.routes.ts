import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {About} from './pages/about/about';
import {Contact} from './pages/contact/contact';
import {ProductDetail} from './pages/product-detail/product-detail';
import {NotFound} from './pages/not-found/not-found';
import {Products} from './pages/products/products';
import {UserList} from './components/user-list/user-list';
import {AuthGuard} from './guards/auth-guard';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Home },
  // Route par défaut (public)
  {
    path: 'login',
    component: Login
  },
  // Login (public)
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [AuthGuard]
  },
  // Protected
  {
    path: 'about',
    component: About,
    canActivate: [AuthGuard]
  },
  // Protected
  {
    path: 'contact',
    component: Contact,
    canActivate: [AuthGuard]
  },
  // Protected
  {
    path: 'products',
    component: Products,
    canActivate: [AuthGuard]
  },
  // Protected
  {
    path: 'products/:id',
    component: ProductDetail,
    canActivate: [AuthGuard]
  },
  // Protected
  {
    path: 'users',
    component: UserList,
    canActivate: [AuthGuard]
  },
  // Protected
  { path: '404', component: NotFound },
  { path: '**', redirectTo: '/404' }
  // Redirection wildcard
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
