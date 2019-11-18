// Feature module for Venues - lazy loaded
import { NgModule } from "@angular/core";
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule
} from "@angular/material";
import { HomePageComponent } from './home.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { GyphListComponent } from './components/gyph-list/gyph-list.component';

@NgModule({
  declarations: [
    GyphListComponent,
    HomePageComponent,
    SearchFormComponent
  ],
  imports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class HomePageModule { }
