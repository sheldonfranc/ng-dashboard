/**
 * Created by andrew.yang on 5/18/2017.
 */
import { OnInit, Component, Input, Inject } from "@angular/core";
import { TroubleshootingGuideService } from "app/services/troubleshoot.guide.service";
import { map } from "rxjs/operators";
import { UserDetails, User } from "app/users";
import { MatDialog, MatDialogRef } from "@angular/material";
import { DialogOverviewComponent } from "app/components/dialog/dialog.overview.component";

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
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      width: "250px",
      height: "250px",
      data: user
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  test(): void {}
}
