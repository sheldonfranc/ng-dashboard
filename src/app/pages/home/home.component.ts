/**
 * Created by andrew.yang on 5/18/2017.
 */
import { OnInit, Component, Input, Inject } from "@angular/core";
import { TroubleshootingGuideService } from "app/services/troubleshoot.guide.service";
import { map } from "rxjs/operators";
import { UserDetails, User } from "app/users";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialog, MatDialogRef } from "@angular/material";

@Component({
  selector: "home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
  users: User[];
  constructor(
    private guideService: TroubleshootingGuideService,
    private dialog: MatDialog
  ) {}
  ngOnInit() {
    this.renderIssueTracker();
  }

  /* method to call get-api from app.service */
  renderIssueTracker() {
    try {
      this.guideService
        .makeIssueRestCall()
        .pipe(map((response: UserDetails) => response.data))
        .subscribe(
          resp => {
            this.users = resp;
            this.guideService.setIssuesObjet(this.users);
            console.log(this.users);
          },
          error => {
            console.log(error, "error");
          }
        );
    } catch (e) {
      console.log(e);
    }
  }

  openDialog(user: User): void {
    console.log(user.last_name);
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: "250px",
      data: user
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed") + result;
      this.users = result;
    });
  }
}

@Component({
  selector: "dialog-overview-example-dialog",
  template: `
    <h1 mat-dialog-title>Hi {{ data.first_name }}</h1>
  `
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: {}
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
