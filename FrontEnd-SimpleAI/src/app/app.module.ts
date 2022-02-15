import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips'; 
import { FirstPageComponent } from './first-page/first-page.component';
import { MatInputModule } from '@angular/material/input'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog'
import { HeadOneComponent } from './first-page/head-one/head-one.component';
import { CardSignInComponent } from './first-page/card-sign-in/card-sign-in.component';
import { MatIconModule } from '@angular/material/icon';
import { DialogRegisterComponent } from './first-page/dialog-register/dialog-register.component';
import { ContentOneComponent } from './first-page/content-one/content-one.component';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatSidenavModule } from '@angular/material/sidenav';
import { SecondPageComponent } from './second-page/second-page.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { HeadTwoComponent } from './second-page/head-two/head-two.component';
import { DashboardComponent } from './second-page/dashboard/dashboard.component';
import { HomeComponent } from './second-page/container/home/home.component';
import { AddNewDatasetComponent } from './second-page/container/add-new-dataset/add-new-dataset.component';
import { DatasetComponent } from './second-page/container/dataset/dataset.component';
import { CodeComponent } from './second-page/container/code/code.component';
import { QuestionAnswerComponent } from './second-page/container/question-answer/question-answer.component';
import { TryYourModelComponent } from './second-page/container/try-your-model/try-your-model.component';
import { StoreModule } from '@ngrx/store';
import { FirstFooterComponent } from './first-page/first-footer/first-footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; 
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule } from 'ngx-file-drop';
import { AddWithMydesktopComponent } from './second-page/container/add-new-dataset/add-with-mydesktop/add-with-mydesktop.component';
import { AddWithGithubComponent } from './second-page/container/add-new-dataset/add-with-github/add-with-github.component';
import { AddWithGoogledriveComponent } from './second-page/container/add-new-dataset/add-with-googledrive/add-with-googledrive.component';
import { AddWithDropboxComponent } from './second-page/container/add-new-dataset/add-with-dropbox/add-with-dropbox.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    HeadOneComponent,
    CardSignInComponent,
    DialogRegisterComponent,
    ContentOneComponent,
    SecondPageComponent,
    HeadTwoComponent,
    DashboardComponent,
    HomeComponent,
    AddNewDatasetComponent,
    DatasetComponent,
    CodeComponent,
    QuestionAnswerComponent,
    TryYourModelComponent,
    FirstFooterComponent,
    AddWithMydesktopComponent,
    AddWithGithubComponent,
    AddWithGoogledriveComponent,
    AddWithDropboxComponent
  ],
  imports: [
    NgxFileDropModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    StoreModule.forRoot({}, {}),
    FontAwesomeModule,
    MatChipsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
