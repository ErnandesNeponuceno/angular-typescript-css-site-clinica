import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [ 
    // HeaderComponent,
    FooterComponent
  ],
  exports:[ 
    // HeaderComponent,
    // NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
  
})
export class SharedModule { }
