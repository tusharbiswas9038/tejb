import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShellComponent } from './shared/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';

import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoriesService } from '@tejb/products';
import { ProductsListComponent } from './products/product-list/product-list.component';
import { ProductsFormComponent } from './products/product-form/products-form.component';

const routes: Routes =[{
  path: '',
  component: ShellComponent,
  children:[
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'Categories',
      component: CategoriesListComponent
    },
    {
      path: 'Categories/form',
      component: CategoriesFormComponent
    },
    {
      path: 'categories/form/:id',
      component: CategoriesFormComponent
    },
    {
      path: 'products',
      component: ProductsListComponent
    },
    {
      path: 'products/form',
      component: ProductsFormComponent
    },
    {
      path: 'products/form/:id',
      component: ProductsFormComponent
    },
  ]
}];
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, DashboardComponent, ShellComponent, SidebarComponent, CategoriesListComponent, CategoriesFormComponent, ProductsListComponent, ProductsFormComponent],
  imports: [BrowserModule,HttpClientModule,FormsModule,ReactiveFormsModule,RouterModule.forRoot(routes, { initialNavigation: 'enabled'})],
  providers: [CategoriesService],
  bootstrap: [AppComponent],

    })

export class AppModule {}
