import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  leaveForm: FormGroup | any;
  leaveTypes: string[] = ['Sick Leave', 'Casual Leave', 'Family Care', 'Govt Works', 'Religious Leave', 'Other'];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      leaveType: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.leaveForm.valid) {
      // Handle form submission
      console.log('Form Data:', this.leaveForm.value);
    }
  }
}
