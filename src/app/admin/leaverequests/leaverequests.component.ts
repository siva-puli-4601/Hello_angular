import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-leaverequests',
  templateUrl: './leaverequests.component.html',
  styleUrls: ['./leaverequests.component.css']
})
export class LeaverequestsComponent implements OnInit {

  constructor(private ser:DataService) { }
  leaveData:any;
  ngOnInit(): void {
  this.ser.getApi("leaverequests").subscribe((data)=>{
     this.leaveData=data.message;
  },(err)=>
  {
   alert("failed to get data");
  })
  }
  acceptLeave(email:any)
  {
     
  }
  rejectLeave(email:any)
  {

  }

}
