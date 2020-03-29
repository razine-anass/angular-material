import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule, MatDatepickerModule,
         MatProgressSpinnerModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge'
  


const MaterialComponents = [ MatButtonModule, MatButtonToggleModule, MatIconModule, MatDatepickerModule,
  MatBadgeModule, MatProgressSpinnerModule ]

@NgModule({
  exports: [ MaterialComponents ],
  imports: [ MaterialComponents ]
})
export class MaterialModule { }
