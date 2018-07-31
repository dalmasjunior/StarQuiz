import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharInfoComponent } from '../char-info/char-info.component';
import { TimerComponent } from '../timer/timer.component';
import { LogoComponent } from '../logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    CharInfoComponent,
    TimerComponent,
    LogoComponent
  ],
  declarations: []
})
export class Quiz1Module { }
