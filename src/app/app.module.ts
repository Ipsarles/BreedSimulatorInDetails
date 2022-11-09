import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppComponent } from './app.component';
import { CathDetailsComponent } from './cath-details/cath-details.component';
import { ChartsComponent } from './charts/charts.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [AppComponent, CathDetailsComponent, ChartsComponent, HeaderComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    NgApexchartsModule,
  ],
  providers: [ChartsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
