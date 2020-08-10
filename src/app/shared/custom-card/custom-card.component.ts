import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  templateUrl: './custom-card.component.html',
  styleUrls: ['./custom-card.component.scss']
})
export class CustomCardComponent implements OnInit {
  @Input() inputMessage: any;
  @Input() title: any;
  constructor() { }
  ngOnInit(): void {
  }
}
