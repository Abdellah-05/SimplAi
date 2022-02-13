import { Component, OnInit } from '@angular/core';
import { faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faGoogleDrive } from '@fortawesome/free-brands-svg-icons'
import { faDropbox } from '@fortawesome/free-brands-svg-icons'

@Component({
  selector: 'app-add-new-dataset',
  templateUrl: './add-new-dataset.component.html',
  styleUrls: ['./add-new-dataset.component.scss']
})
export class AddNewDatasetComponent implements OnInit {

  faFolderPlus=faFolderPlus;
  faGithub=faGithub;
  faGoogleDrive=faGoogleDrive;
  faDropbox=faDropbox;

  dialog_1 = true;
  dialog_2 = false;
  dialog_3 = false;
  dialog_4 = false;

  showOption_1(){
    this.dialog_1 = true;
    this.dialog_2 = false;
    this.dialog_3 = false;
    this.dialog_4 = false;
  }

  showOption_2(){
    this.dialog_1 = false;
    this.dialog_2 = true;
    this.dialog_3 = false;
    this.dialog_4 = false;
  }

  showOption_3(){
    this.dialog_1 = false;
    this.dialog_2 = false;
    this.dialog_3 = true;
    this.dialog_4 = false;
  }

  showOption_4(){
    this.dialog_1 = false;
    this.dialog_2 = false;
    this.dialog_3 = false;
    this.dialog_4 = true;
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
