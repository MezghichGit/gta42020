import { Component, OnInit } from '@angular/core';
import { EmployerService } from '../services/employer.service';
import { Employer } from '../entities/models';
@Component({
  selector: 'app-list-employer',
  templateUrl: './list-employer.component.html',
  styleUrls: ['./list-employer.component.css']
})
export class ListEmployerComponent implements OnInit {

  constructor(private service : EmployerService) { }

  tabEmp: Employer[];
  ngOnInit(): void {
    this.tabEmp = this.service.getEmployer();
  }

}
