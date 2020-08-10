import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-institution',
  templateUrl: './new-institution.component.html',
  styleUrls: ['./new-institution.component.scss']
})
export class NewInstitutionComponent implements OnInit {
  isUpdateForm: Boolean = false;
  institutionData: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.id){
        this.isUpdateForm = true;
        this.institutionData = {id: params.id};
      }
    });
  }

}
