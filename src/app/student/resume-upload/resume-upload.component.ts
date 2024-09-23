import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.css']
})
export class ResumeUploadComponent {
  resumeForm: any;

  constructor(private fb: FormBuilder,private ser: DataService) {
    // Initialize the form group with form controls
    this.resumeForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      resumeNo: ['', Validators.required],
      resumeFile: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.resumeForm.patchValue({
      resumeFile: file
    });
  }

  onSubmit() {
    if (this.resumeForm.valid) {
      const formData = new FormData();
      formData.append('email', this.resumeForm.get('email')?.value);
      formData.append('name', this.resumeForm.get('name')?.value);
      formData.append('resumeNo', this.resumeForm.get('resumeNo')?.value);
      formData.append('resume', this.resumeForm.get('resumeFile')?.value);

      console.log('Form Submitted:', formData.get('email'));

      this.ser.postApi("upload-resume", formData).subscribe((data)=>
      {
       console.log(data);
      },
    (err)=>
    {
      console.log(err.message)
    })
    }
  }
}

