import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';

FormsModule

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShoppingComponent,
    ProductComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'', component:ProductComponent},
      {path:'shopping', component:ShoppingComponent},
      {path:'main', component:MainComponent},

    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
