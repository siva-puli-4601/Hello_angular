import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  leaveForm: FormGroup | any;
  leaveTypes: string[] = ['Sick Leave', 'Casual Leave', 'Family Care', 'Govt Works', 'Religious Leave', 'Other'];

  constructor(private fb: FormBuilder,private ser:DataService,private route:Router) { }

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      leaveType: ['', Validators.required],
      reason:['', Validators.required]
    });
  }

  onSubmit(): void {
    const email=localStorage.getItem('email');
    const username=localStorage.getItem('username');
    const {startDate,endDate,leaveType,reason}=this.leaveForm.value;
    const send={"email":email,"username":username,"startDate":startDate,"endDate":endDate,"leaveType":leaveType,"reason":reason};
    this.ser.postApi("leave",send).subscribe((data)=>
    {
      console.log(data.message);
      alert("Leave request sent successfully");
      this.leaveForm.reset();
      this.route.navigate(['/employee']);
    },
  (err)=>{
    alert("failed to leave request could you please try again");
  })
  }
  generateReason(reason:any):void{
       this.ser.postApi("genratereason",reason).subscribe((data)=>{
        console.log(data.message);
        this.leaveForm.patchValue({reason:data.message});
       },
      (err)=>{
        alert("try once please"+err.message);
      })
  }
}
