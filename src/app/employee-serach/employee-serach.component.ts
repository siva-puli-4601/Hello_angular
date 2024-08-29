import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-employee-serach',
  templateUrl: './employee-serach.component.html',
  styleUrls: ['./employee-serach.component.css']
})
export class EmployeeSerachComponent implements OnInit {

  employees: any[] = [];
  filteredEmployees: any[] = [];
  searchControl: FormControl = new FormControl('');

  constructor(private ser: DataService) {}

  ngOnInit(): void {
    this.fetchEmployees();
    this.setupSearch();
  }

  fetchEmployees(): void {
    this.ser.getApi("employeesearch").subscribe((data: any) => {
      this.employees = data.message;
      this.filteredEmployees = data; // Initialize with all data
    });
  }

  setupSearch(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300), // Wait for 300ms pause in events
      distinctUntilChanged() // Ignore if next search query is same as previous
    ).subscribe(searchTerm => {
      this.filterEmployees(searchTerm);
    });
  }

  filterEmployees(searchTerm: string): void {
    if (!searchTerm) {
      this.filteredEmployees = this.employees;
    } else {
      console.log(searchTerm);
      console.log(this.employees);
      searchTerm = searchTerm.toLowerCase();
      this.filteredEmployees = this.employees.filter(employee =>
        employee.username.toLowerCase().includes(searchTerm) ||
        employee.role.toLowerCase().includes(searchTerm) ||
        employee.email.toLowerCase().includes(searchTerm)
      );
    }
  }
}
