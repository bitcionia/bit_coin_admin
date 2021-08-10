import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-viewlist',
  templateUrl: './viewlist.component.html',
  styleUrls: ['./viewlist.component.scss']
})
export class ViewlistComponent implements OnInit {
  User: any;
  Email: any;
  mobile: any;
  status: any;
  address: any;
  created: any;
  createdat: any;

  constructor(public dialogRef: MatDialogRef<ViewlistComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { 
      console.log(this.data)
      this.Email=this.data['data']['email']
      this.User=this.data['data']['username']
      this.mobile=this.data['data']['mobile']
      this.status=this.data['data']['status']
      this.address=this.data['data']['address']
      this.createdat=this.data['data']['createdAt']
this.created=this.createdat.split("T")[0],
      console.log(this.Email)
   
      }
  ngOnInit(): void {
  }
  closeModelBox(): void {
    this.dialogRef.close();
 
  }
  successAlert() {
    Swal.fire({
      icon: 'success',
      title: 'Well Done!',
      text: 'You clicked the button!',
      confirmButtonColor: '#6259ca'
    })
  }
}
