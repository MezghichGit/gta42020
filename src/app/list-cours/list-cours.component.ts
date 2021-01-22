import { Component, OnInit } from '@angular/core';
import { Cours } from '../entities/models';
import {FirstCuPipe } from '../first-cu.pipe';
@Component({
  selector: 'list-cours',
  //templateUrl: './list-cours.component.html',

  template: `

  {{ monCours.titre| firstCu }} <br/>
  {{ monCours.rating |number:'2.2-6'}}<br/>
  {{monCours.price|currency:'TND'}}<br/>
  {{monCours.releaseDate|date:'mediumDate'}}<br/>
  `,
  
  styleUrls: ['./list-cours.component.css']
})
export class ListCoursComponent implements OnInit {

  monCours =
    {
      titre: "Angular 9",
      rating: 4.97641,
      price: 120,
      releaseDate: new Date(2022, 11, 8)
    }
  
  niveau : string = 'GTA';
  courses: string[] = ["Angular", "ExpressJS", "Git"];
  state = true;
  bgc = "green";
  divColor = "red";
  mesCours: Cours[] = [
    {
      id: 1,
      titre: "Angular",
      vh:21
    },
    {
      id: 2,
      titre: "ExpressJS",
      vh:10},
    {
      id: 3,
      titre: "Git",
      vh:4
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }


  showhide() { 
    this.state = !this.state;
  }

  display(myText) {
    alert("vous avez taper un text: " + myText);
   }


   clicBtn()
  {
    alert("Un clic");
   }
   hoverBtn()
  {
    alert("Btn Hover");
  }

}
