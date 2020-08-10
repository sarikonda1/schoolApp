import { Component, OnInit, Input, EventEmitter, Output, TemplateRef } from '@angular/core';
import {Location} from '@angular/common';
import { fuseAnimations } from '@fuse/animations';
import { CommonService } from 'app/service/common.service';
import { Subscription } from 'rxjs';
import { CommonComponent } from '../common/common.component';

@Component({
  selector: 'app-af-details',
  templateUrl: './af-details.component.html',
  styleUrls: ['./af-details.component.scss'],
  animations: fuseAnimations
})
export class AfDetailsComponent extends CommonComponent implements OnInit {
  @Input() keyValues: Array<any>;
  @Input() actions: Array<any>;
  @Input() title: any;
  @Input() header: any;
  @Input() isBackButtonRequired: boolean;
  @Input() isElevation: boolean;
  @Input() infoKey: any;
  @Input() templateRef:  TemplateRef<any>;
  @Input() expand = true;
  @Input() payOnline = false;

  @Output() action: EventEmitter<any> = new EventEmitter<any>();
  @Output() backClick: EventEmitter<any> = new EventEmitter<any>();
  @Output() onClickPayOnline: EventEmitter<any> = new EventEmitter<any>();

  subscription: Subscription;
  showOverLay = '';
  constructor(public location: Location, public commonService: CommonService) { 
    super();
    this.subscription = this.commonService.getOverlay().subscribe(res => {
      if (res.overLay) {
        this.showOverLay = res.overLay;
      }
    });
  }

  ngOnInit(): void {
  }

  onSelectAction(item: any): void {
    this.action.emit(item);
  }

  onSelectBack(): void {
    this.location.back();
  }

  onSelectPay(): void{
    this.onClickPayOnline.emit();
  }
}
