import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  leaveForm: FormGroup | any;
  leaveTypes: string[] = ['Sick Leave', 'Casual Leave', 'Family Care', 'Govt Works', 'Religious Leave', 'Other'];

  constructor(private fb: FormBuilder,private ser:DataService) { }

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      leaveType: ['', Validators.required],
      reason:['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.leaveForm.valid) {
      // Handle form submission
      console.log('Form Data:', this.leaveForm.value);
    }
  }
  generateReason(reason:any):void{
       this.ser.getReason(reason).subscribe((data)=>{
        console.log(data.message);
        this.leaveForm.get('reason').value=data.message;
       },
      (err)=>{
        alert("try once please"+err.message);
      })
  }
}
