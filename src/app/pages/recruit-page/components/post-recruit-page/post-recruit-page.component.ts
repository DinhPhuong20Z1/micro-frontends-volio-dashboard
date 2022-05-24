import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-post-recruit-page',
  templateUrl: './post-recruit-page.component.html',
  styleUrls: ['./post-recruit-page.component.scss'],
})
export class PostRecruitPageComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}
  id: string | null;

  ngOnInit(): void {
    // console.log("this.route.path: ", this.route.path)
    // console.log("this.route.path: ", this.route.path)
    this.id = this.route.snapshot.paramMap.get('id');
    // this.route.queryParams.subscribe((params) => {
    //   console.log(params); // { orderby: "price" }
    //   this.orderby = params.orderby;
    //   console.log(this.orderby); // price
    // });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogRecruitPage, {
      width: '600px',
      height: '600px',
      // data: {name: this.name, animal: this.animal},
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}

@Component({
  selector: 'dialog-recruit-page',
  templateUrl: 'dialog-recruit-page.component.html',
  styleUrls: ['./post-recruit-page.component.scss'],
})
export class DialogRecruitPage {
  fileName = '';

  constructor(
    public dialogRef: MatDialogRef<DialogRecruitPage>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveDialog() {}

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];

  //   if (file) {
  //     this.fileName = file.name;

  //     const formData = new FormData();

  //     formData.append('thumbnail', file);

  //     // const upload$ = this.http.post("/api/thumbnail-upload", formData);

  //     // upload$.subscribe();
  //   }
  // }

  onFileSelected(event: any) {
    const file:File = event.target.files[0];

    if (file) {
        this.fileName = file.name;
        const formData = new FormData();
        formData.append("thumbnail", file);

        // const upload$ = this.http.post("/api/thumbnail-upload", formData, {
        //     reportProgress: true,
        //     observe: 'events'
        // })
        // .pipe(
        //     finalize(() => this.reset())
        // );

        // this.uploadSub = upload$.subscribe(event => {
        //   if (event.type == HttpEventType.UploadProgress) {
        //     this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        //   }
        // })
    }
  }
}
