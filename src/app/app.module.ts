import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchFormComponent } from './pages/home/components/search-form/search-form.component';
import { GyphListComponent } from './pages/home/components/gyph-list/gyph-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchFormComponent,
    GyphListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
