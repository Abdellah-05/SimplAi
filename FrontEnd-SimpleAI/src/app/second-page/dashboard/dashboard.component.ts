import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddNewDatasetComponent } from '../container/add-new-dataset/add-new-dataset.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit { 

  // openDialog() {
  //   const dialogRef = this.dialog.open(AddNewDatasetComponent);
    
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  routeQueryParams$: Subscription;  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.routeQueryParams$ = route.queryParams.subscribe(params => {
      if (params['addNewDataset']) {
        this.openDialog();
      }
    });
  }  ngOnDestroy() {
    this.routeQueryParams$.unsubscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddNewDatasetComponent);
        dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
        this.router.navigate(['/dataset'], { relativeTo: this.route });
    });
  }
  ngOnInit(): void {
  }

}
