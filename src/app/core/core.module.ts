import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataModule } from './data/data.module';
import {
  FooterComponent,
  HeaderComponent
} from './components';


const BASE_MODULES = [RouterModule, CommonModule, FormsModule, ReactiveFormsModule];

const COMPONENTS = [
  FooterComponent,
  HeaderComponent
];

@NgModule({
  imports: [...BASE_MODULES],
  exports: [...BASE_MODULES, ...COMPONENTS],
  declarations: [...COMPONENTS, HeaderComponent],
  providers: [...DataModule.forRoot().providers]
})
export class CoreModule {
}
