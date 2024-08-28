import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HolidaycomponentComponent } from '../holidaycomponent/holidaycomponent.component';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  selectedHoliday: { date: string, reason: string } | null = null;

  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  weekDays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  daysInMonth: number[] = [];

  holidays: { date: number, reason: string }[] = [
    { date: 25, reason: 'Christmas Day' },
    { date: 1, reason: 'New Year\'s Day' },
    // Other holidays...
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.updateCalendar();
  }

  isHoliday(day: number): boolean {
    return this.holidays.some(holiday => holiday.date === day);
  }

  openHolidayPopup(day: number): void {
    const holiday = this.holidays.find(holiday => holiday.date === day);
    if (holiday) {
      this.selectedHoliday = { 
        date: `${day} ${this.months[this.currentMonth]} ${this.currentYear}`, 
        reason: holiday.reason 
      };
      this.dialog.open(HolidaycomponentComponent, {
        data: this.selectedHoliday
      });
    }
  }

  closeHolidayPopup(): void {
    this.selectedHoliday = null;
  }

  previousMonth(): void {
    this.currentMonth = (this.currentMonth - 1 + 12) % 12;
    if (this.currentMonth === 11) this.currentYear--;
    this.updateCalendar();
  }

  nextMonth(): void {
    this.currentMonth = (this.currentMonth + 1) % 12;
    if (this.currentMonth === 0) this.currentYear++;
    this.updateCalendar();
  }

  updateCalendar(): void {
    const daysInThisMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: daysInThisMonth }, (_, i) => i + 1);
  }
}