import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent  {
  

  selectedWeek = 6;
  weekDates = this.getWeekDates(); // Assuming this is a method to get the week's dates
  dayEntries = Array(7).fill(0); // Initialize with 0 hours for each day
  scheduledHours = 0;

  onDateSelected(event: MatDatepickerInputEvent<Date>) {
    const selectedDate = event.value;
    if (selectedDate) {
      this.weekDates = this.getWeekDates(selectedDate);
    }
  }

  newTimeEntry() {
    console.log('New time entry clicked');
  }

  previousWeek() {
    // Decrease the current date by 7 days to get the previous week
    const firstDayOfCurrentWeek = this.weekDates[0];
    const previousWeekStart = new Date(firstDayOfCurrentWeek.setDate(firstDayOfCurrentWeek.getDate() - 7));
  
    // Update the weekDates array to show the previous week's dates
    this.weekDates = this.getWeekDates(previousWeekStart);
  }
  

  nextWeek() {
    // Increase the current date by 7 days to get the next week
    const firstDayOfCurrentWeek = this.weekDates[0];
    const nextWeekStart = new Date(firstDayOfCurrentWeek.setDate(firstDayOfCurrentWeek.getDate() + 7));
  
    // Update the weekDates array to show the next week's dates
    this.weekDates = this.getWeekDates(nextWeekStart);
  }
  

  downloadReport() {
    console.log('Download report clicked');
    // Logic for downloading the report
  }

  totalHours() {
    return this.dayEntries.reduce((acc, hours) => acc + +hours, 0);
  }

  getWeekDates(selectedDate: Date = new Date()) {
    const startOfWeek = selectedDate.getDate() - selectedDate.getDay();
    return Array.from({ length: 7 }, (_, i) => new Date(selectedDate.setDate(startOfWeek + i)));
  }
}