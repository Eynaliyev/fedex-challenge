// Feature module for giphs - lazy loaded
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
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
import { GiphListComponent } from './components/giph-list/giph-list.component';
import { FormsModule } from "@angular/forms";
import { GiphService } from './services/giph.service';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    GiphListComponent,
    HomePageComponent,
    SearchFormComponent
  ],
  imports: [
    HomeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    CommonModule,
    FormsModule
  ],
  providers: [GiphService]
})
export class HomePageModule { }
