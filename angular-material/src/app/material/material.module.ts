import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatDatepickerModule,
         MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule,
         MatMenuModule, MatListModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge'
import { FormsModule } from '@angular/forms';

  


const MaterialComponents = [ MatButtonModule, MatButtonToggleModule, MatIconModule, MatDatepickerModule,
  MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule, FormsModule,
  MatMenuModule, MatListModule ]

@NgModule({
  exports: [ MaterialComponents ],
  imports: [ MaterialComponents ]
})
export class MaterialModule { }
