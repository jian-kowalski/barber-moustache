import { Problem } from './../../model/problem';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent implements OnInit {

  prob: Problem;

  constructor(@Inject(MAT_DIALOG_DATA) public problem: Problem) {
    this.prob = problem;
  }

  ngOnInit(): void {
  }

}
