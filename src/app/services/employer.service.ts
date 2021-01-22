import { Injectable } from '@angular/core';
import { Employer } from '../entities/models';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  // notre source de données : tab
  private tab: Employer[] = [
    {
      cin: 10,
      nom : "amine"
    },
    {
      cin: 12,
      nom : "ali"
    },
    {
      cin: 13,
      nom : "ahmed"
    }]

  constructor() { }

  getEmployer() { 
    return this.tab;
  }
}
