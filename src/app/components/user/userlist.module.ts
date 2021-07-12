import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserListRoutingModule } from './userlist-routing.module';
import { ChartsModule } from 'ng2-charts';
import { MatDialogModule } from '@angular/material/dialog';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { UserlistComponent } from './userlist/userlist.component';
import { AddUserComponent } from './add-user/add-user.component';
import { InactiveComponent } from './inactive/inactive.component';
import { ViewlistComponent } from './viewlist/viewlist.component';
import { EditlistComponent } from './editlist/editlist.component';
import { UseractiveComponent } from './useractive/useractive.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [UserlistComponent, AddUserComponent, InactiveComponent, ViewlistComponent, EditlistComponent, UseractiveComponent, ],
  imports: [
    CommonModule,
    UserListRoutingModule,
    NgbModule,
    NgxDatatableModule,
    ChartsModule,
    MatDialogModule,
    NgCircleProgressModule.forRoot(),
  ]
})
export class UserListModule { }
