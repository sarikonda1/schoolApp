import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-af-loader',
  template: `<img src="/assets/images/AF_Logo_anim_2.gif" alt="this slowpoke moves"  width=90/>`,
  styleUrls: ['./af-loader.component.scss']
})
export class AfLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
