import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PNR } from 'src/app/pnr';
import { PNRStatusComponent } from 'src/app/pnr-status.component';
import { PNRStatusService } from 'src/app/pnr-status.service';

@NgModule({
  declarations: [
    AppComponent,
    PNRStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PNRStatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
