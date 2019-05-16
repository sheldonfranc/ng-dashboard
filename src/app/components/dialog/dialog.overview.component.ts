import { OnInit, Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "dialog-overview-component",
  templateUrl: "./dialog-overview-component.html",
  styleUrls: ["./dialog-overview.css"]
})
export class DialogOverviewComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  ngOnInit() {
    this.changePosition();
  }

  changePosition() {
    this.dialogRef.updatePosition({ top: "50px", left: "50px" });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
