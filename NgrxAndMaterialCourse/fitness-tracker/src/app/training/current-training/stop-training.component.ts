import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'stop-training-dialog',
  template: `<h1 mat-dialog-title>Are You Sure ?</h1>
            <mat-dialog-content>
              <p>You Already Got {{passedData.progress}}%</p>
            </mat-dialog-content>
            <mat-dialog-actions>
              <button mat-button [mat-dialog-close]="true">Yes</button>
              <button mat-button [mat-dialog-close]="false" >No</button>
            </mat-dialog-actions>
  `
})

export class StopTrainingComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) { }

  ngOnInit() {
    console.log(`[Dialog] - passedData: `, this.passedData);
   }
}
