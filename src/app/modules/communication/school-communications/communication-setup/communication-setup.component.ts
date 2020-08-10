import { Component, OnInit } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { CommonService } from 'app/service/common.service';

@Component({
  selector: 'app-communication-setup',
  templateUrl: './communication-setup.component.html',
  styleUrls: ['./communication-setup.component.scss']
})
export class CommunicationSetupComponent extends CommonComponent implements OnInit {
  showCommunicationDetails = true;
  showMessageTransmission: boolean;
  index: any;
  selectedChanged: any;
  constructor(public commonService: CommonService) { 
    super();
  }

  ngOnInit(): void {
  }


   // tab Selection
   selected(value: any): void {
    this.index = value;
    switch (value) {
      case 0: {
        // statements; 
        this.showMessageTransmission = false;
        this.showCommunicationDetails = true;
        window.location.hash = 'CommunicationDetails';
        break;
      }
      case 1: {
        this.showMessageTransmission = true;
        this.showCommunicationDetails = false;
        window.location.hash = 'MessageTransmissions';
        break;
      }
      default: {
        // statements; 
        break;
      }
    }
    /*const instituteDetails = JSON.parse(localStorage.getItem('_s'));
    if (instituteDetails != null) {
      this.selectedChanged = JSON.parse(localStorage.getItem('_s')).id;
    }*/
  }
}
