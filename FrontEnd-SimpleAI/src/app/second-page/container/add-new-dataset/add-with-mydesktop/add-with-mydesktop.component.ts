import { Component, OnInit } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { faDownload } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-add-with-mydesktop',
  templateUrl: './add-with-mydesktop.component.html',
  styleUrls: ['./add-with-mydesktop.component.scss']
})
export class AddWithMydesktopComponent implements OnInit {

  faDownload=faDownload;

  public files: NgxFileDropEntry[] = [];

  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {

      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          console.log(droppedFile.relativePath, file);

        });
      } else {
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }

  public fileOver(event: any){
    console.log(event);
  }

  public fileLeave(event: any){
    console.log(event);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
