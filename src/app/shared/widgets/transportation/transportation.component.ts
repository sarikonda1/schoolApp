import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { CommonComponent } from 'app/shared/common/common.component';
import { DashBoardService } from 'app/service/dashboard/dashboard-service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations,
  providers: [DashBoardService]
})
export class TransportationComponent extends CommonComponent implements OnInit {
  transportInfo: Array<any> = [];
  transportNumberCards: Array<any> = [];
  view: any[] = [700, 300];
  cardColor =  '#232837';
  transportData: any = {};
  isLoading = true;

  constructor(private dashBoardService: DashBoardService, public cd: ChangeDetectorRef) {
    super();
  }

  ngOnInit(): void {
    this.getTrasportData();
  }

  getTrasportData(): void {
    this.dashBoardService.getTransportation()
      .subscribe(res => {
        this.setDetails(res);
      }, err => {
        this.isLoading = false;
        this.cd.detectChanges();
      });
  }

  setDetails(response: any): void {
    this.transportData = response;
    
    delete this.transportData.messages;
    delete this.transportData.statusCode;
    this.transportData =  Object.values(this.transportData).some
      (x => x !== 0) ? this.transportData : null;

      this.isLoading = false;
      this.cd.detectChanges();

      // console.log('trm', this.transportData);

    // this.transportInfo = response != null ? this.getKeyValuesOfObject(response) : null;
    // if (this.transportInfo && this.transportInfo.length) {
    //   this.transportInfo = this.transportInfo.filter(x => x.Label !== 'messages' && x.Label !== 'statusCode');
    // }

    // this.transportInfo = this.transportInfo.some
    //   (x => x.Value !== 0) ? this.transportInfo : null;
    // this.transportNumberCards = [];
    // if (this.transportInfo !== null) {
    //   this.transportInfo.forEach(element => {
    //     this.transportNumberCards.push({name: element.Label, value: element.Value});
    //   });
    // }

  }
}
