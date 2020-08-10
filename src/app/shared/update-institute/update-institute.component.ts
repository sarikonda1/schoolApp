import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-update-institute',
  templateUrl: './update-institute.component.html',
  styleUrls: ['./update-institute.component.scss']
})
export class UpdateInstituteComponent implements OnInit {
  institutionData: any;
  constructor(private route: ActivatedRoute, private _fuseConfigService: FuseConfigService) { }
  ngOnInit(): void {
    this._fuseConfigService.config = {
      layout: {
          navbar   : {
              hidden: true
          },
          toolbar  : {
              hidden: true
          },
          footer   : {
              hidden: true
          },
          sidepanel: {
              hidden: true
          }
      }
    };
    this.route.params.subscribe((params) => {
      if (params.id && params.email){
        this.institutionData = {id: params.id, email: params.email};
      }
    });
  }
}
