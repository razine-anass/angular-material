import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatDatepickerModule,
         MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule,
         MatMenuModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge'
import { FormsModule } from '@angular/forms';

  


const MaterialComponents = [ MatButtonModule, MatButtonToggleModule, MatIconModule, MatDatepickerModule,
  MatBadgeModule, MatProgressSpinnerModule, MatToolbarModule, MatSidenavModule, FormsModule,
  MatMenuModule ]

@NgModule({
  exports: [ MaterialComponents ],
  imports: [ MaterialComponents ]
})
export class MaterialModule { }
