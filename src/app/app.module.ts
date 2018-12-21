import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import * as $ from 'jquery';
import { AppRoutingModule, appRoutedComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import {CommonModule} from '@angular/common';
import {ToastrModule} from 'ngx-toastr';






@NgModule({
  declarations: [
    AppComponent,
    appRoutedComponents
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    CommonModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
