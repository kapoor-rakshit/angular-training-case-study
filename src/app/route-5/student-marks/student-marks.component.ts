import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentMarksService } from '../student-marks.service';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})
export class StudentMarksComponent implements OnInit {

  studentsData = new MatTableDataSource<any>([]);
  @ViewChild('studentTableSort', {static: true}) sort!: MatSort;
  displayedColumns: any[] = [];

  constructor(private studentService: StudentMarksService) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(
      (data: any)=> {
        this.studentsData = new MatTableDataSource<any>(data);
        this.studentsData.sort = this.sort;
        this.displayedColumns = Object.keys(data[0]);
      },
      (err: Error)=> {
        console.log(`ERROR ==> ${err.message}`);
      }
    );
  }
}
