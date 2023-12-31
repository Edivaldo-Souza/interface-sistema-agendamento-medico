import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {provideRouter} from "@angular/router"
import routeConfig from './routes';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    provideRouter(routeConfig),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
