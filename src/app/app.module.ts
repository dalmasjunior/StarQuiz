import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { Quiz1Component } from './quiz1/quiz1.component';
import { HomeComponent } from './home/home.component';
import { CharInfoComponent } from './char-info/char-info.component';
import { TimerComponent } from './timer/timer.component';
import { LogoComponent } from './logo/logo.component';
import { IntroComponent } from './intro/intro.component';
import { RankComponent } from './rank/rank.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'intro', component: IntroComponent},
  { path: 'quiz1', component: Quiz1Component},
  { path: 'rank', component: RankComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    Quiz1Component,
    HomeComponent,
    CharInfoComponent,
    TimerComponent,
    LogoComponent,
    IntroComponent,
    RankComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      routes, {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent, CharInfoComponent]
})
export class AppModule { }
