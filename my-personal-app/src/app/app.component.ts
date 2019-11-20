import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = "Tia's Webpage";
  peopleArray: any;
  ngOnInit(): void {
    this.peopleArray = [
      {
        id: 1,
        name: "Tia",
        relationship: "self",
        birthday: new Date("1997-06-13")
      },
      {
        id: 2,
        name: "Katie",
        relationship: "mom",
        birthday: new Date("1963-11-17")
      },
      {
        id: 3,
        name: "Christine",
        relationship: "mom",
        birthday: new Date("1964-11-15")
      },
      {
        id: 4,
        name: "Natalya",
        relationship: "sister",
        birthday: new Date("1999-09-17")
      },
      {
        id: 5,
        name: "Tangee",
        relationship: "friend",
        birthday: new Date("1996-06-15")
      }

    ];
  }
}
