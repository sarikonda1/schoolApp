import { Component, OnInit } from '@angular/core';
import { SchoolVirtualClassService } from 'app/service/general/api/school-virtual-class.service';
import { MatSnackBar } from '@angular/material';
import { CommonComponent } from 'app/shared/common/common.component';

@Component({
  selector: 'app-virtual-class-rooms',
  templateUrl: './virtual-class-rooms.component.html',
  styleUrls: ['./virtual-class-rooms.component.scss'],
  providers: [SchoolVirtualClassService]
})
export class VirtualClassRoomsComponent extends CommonComponent implements OnInit {
  virtualClassRoomsList: any[] = [];
  constructor(private schoolVirtualClassService: SchoolVirtualClassService,
    public snackBar: MatSnackBar) { super(); }

  ngOnInit(): void {
    this.getVirtualClassRooms();
  }
  getVirtualClassRooms(): void {
    this.schoolVirtualClassService.schoolVirtualClassesRooms().subscribe(res => this.virtualClassResponse(res), error => {
      this.errorResponse(error);
    });
  }

  virtualClassResponse(response: any): void {
    this.virtualClassRoomsList = [];
    if (response.virtualClassRoomInfos && response.virtualClassRoomInfos.length) {
      response.virtualClassRoomInfos.forEach(element => {
        this.virtualClassRoomsList.push({
          label: element.virtualRoomName,
          value: element.id
        });
      });
    }
  }

  onSelectAction(item: any): void {
    this.schoolVirtualClassService.createRoomHash(item.value).subscribe(res => this.virtualRoomResponse(res), error => {
      this.errorResponse(error);
    });
  }

  virtualRoomResponse(response: any): void {
    if (response.roomHashUrl) {
      window.open((response.roomHashUrl));
    }
  }
}
