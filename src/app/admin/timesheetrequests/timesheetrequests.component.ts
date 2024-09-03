import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-timesheetrequests',
  templateUrl: './timesheetrequests.component.html',
  styleUrls: ['./timesheetrequests.component.css']
})
export class TimesheetrequestsComponent implements OnInit {
  users:any;
  constructor(private ser:DataService) { }

  ngOnInit(): void {
    this.ser.getApi("gettimesheets").subscribe((data:any) => {
      this.users=data.message;
  },
(err:any) => {
  alert(err.message);
  })
  }
  acceptTimesheet(id:any)
  {

  }
  rejectTimesheet(id:any)
  {

  }

}
