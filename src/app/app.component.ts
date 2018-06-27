import { Component } from '@angular/core';
import {PlantCell} from '../app/Cell';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    this.niko = 'chumbest boy';
    this.PlantCell.subCellularComponants.geneticMaterial 
  }
  public niko: string;
  public PlantCell: PlantCell  = new PlantCell('Rice Plant Cell');

 
}
