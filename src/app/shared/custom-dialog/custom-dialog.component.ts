import { Component, Inject, Input, TemplateRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogView } from 'app/models/dialog-view';


// Each property can be overridden by the consumer

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.scss']
})
export class CustomDialogComponent {
  dialogData: DialogView;
  @Input() component: TemplateRef<any>;
  constructor(public dialogRef: MatDialogRef<CustomDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.dialogData = data;
  }
   /** Intimating to the listeners `primaryButton()` method. */
   onClickButton(status: any): void {
      this.dialogRef.close(status);
  }

  onCustomCancelClick(): void {
    this.dialogRef.close();
  }
}
