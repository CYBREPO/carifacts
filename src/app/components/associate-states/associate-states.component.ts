import { Component } from '@angular/core';

@Component({
  selector: 'app-associate-states',
  templateUrl: './associate-states.component.html',
  styleUrls: ['./associate-states.component.scss']
})
export class AssociateStatesComponent {
  tabdetails: Array<string> = [
    'head of govt',
    'key facts',
    'national symbols',
    'map',
    'tourist attraction',
  ];
}
