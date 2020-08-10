import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.scss']
})
export class CustomSnackbarComponent implements OnInit {

  constructor(public snackbar: MatSnackBar, @Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit(): void {

  }
  closeSnackBar(): void{
      this.snackbar.dismiss();
  }
  getType(val): any { 
    return typeof val; 
  }
}
