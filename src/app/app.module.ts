import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { Topnavbar } from "./components/topnavbar/topnavbar.component";
import { Navigation } from "./components/navigation/navigation.component";
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import {
  HomeComponent,
  DialogOverviewExampleDialog
} from "./pages/home/home.component";
import { MaterialModule } from "./modules/material/material.module";
import { TroubleshootingGuideService } from "./services/troubleshoot.guide.service";

@NgModule({
  declarations: [AppComponent, Navigation, Topnavbar, HomeComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  // entryComponents: [DialogOverviewExampleDialog],
  providers: [TroubleshootingGuideService],
  bootstrap: [AppComponent]
})
export class AppModule {}
