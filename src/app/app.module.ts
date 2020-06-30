import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { ProductLstComponent } from './products/productList.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule} from '@angular/router';
import { ProductsDetailsGuard } from './products/products-details.guard';
@NgModule({
  declarations: [
    AppComponent,
    ProductLstComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductsDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path :"products", component: ProductLstComponent},
      {path :"products/:id",canActivate:[ProductsDetailsGuard], component: ProductsDetailsComponent},
      {path :"welcome", component: WelcomeComponent},
      {path :"",redirectTo :'welcome',pathMatch:'full'},
      {path :"**",redirectTo :'welcome',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
