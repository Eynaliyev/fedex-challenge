// Feature module for Gyphs - lazy loaded
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
import { GyphListComponent } from './components/gyph-list/gyph-list.component';
import { FormsModule } from "@angular/forms";
import { GyphService } from './services/gyph.service';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    GyphListComponent,
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
  providers: [GyphService]
})
export class HomePageModule { }
