import { Component, Input, OnChanges, OnInit } from '@angular/core';

import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: '[app-table-row]', //[] to insert in an html tag
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent implements OnInit, OnChanges {

  // Type

  /**
   * Of the parent
   */
  @Input() id!: number;
  @Input() mark!: string;
  @Input() model!: string;
  @Input() year!: number;
  @Input() status!: string;

  nextStatus!: string;
  detailsUrl!: string;

  constructor(private carService: CarService) { }

  // With each change
  ngOnChanges(): void {
    this.nextStatus = this.status === 'Disponible' ? 'Indisponible' : 'Disponible';
  }
  // Initialization
  ngOnInit(): void {
    this.detailsUrl = '/car/' + this.id;
  }

  /**
    * Method for switch status car
    * @param newStatus 
    */
  onClickSwitchCarStatus(newStatus: string) {
    this.carService.switchCarStatus(+this.id, newStatus); // + to concatenate in number
  }
}
