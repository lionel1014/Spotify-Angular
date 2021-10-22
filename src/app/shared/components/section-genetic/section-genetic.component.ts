import { Component, Input, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-section-genetic',
  templateUrl: './section-genetic.component.html',
  styleUrls: ['./section-genetic.component.css']
})
export class SectionGeneticComponent implements OnInit {

  @Input() title : string = "";
  @Input() mode : 'small' | 'big' = 'big';
  @Input() dataTracks: Array<TrackModel> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
