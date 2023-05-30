import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-car-details-card',
  templateUrl: './car-details-card.component.html',
  styleUrls: ['./car-details-card.component.scss']
})
export class CarDetailsCardComponent {
  @Input() cardsData: any
  @Output() clickCard: EventEmitter<any> = new EventEmitter


  constructor() { }

  ngOnInit(): void {
  }


  clickingCard() {
    this.clickCard.emit(this.cardsData)
  }

}
