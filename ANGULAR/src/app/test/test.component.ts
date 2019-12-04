import {Component, Input, OnInit} from '@angular/core';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "Marean";
  public hasError = true;
  public titleStyles ={
    color: "blue",
    fontStyle: "italic"
};
  public successClass = "text-success";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = true;
  public isSpecial = true;
  public highlightColor = "orange";
  public messageClasses = {
    "text-success": this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };


  public surname="";

displayName = true;

public nume = "Autostrada";
public culori = ["red","blue","green","yellow"];
public color = "orange"; // if its red -> You picked red color; now it will show Pick again
  constructor() {
  }

  ngOnInit() {

  }

  greetUser(){
    return "Hello" + this.name;
  }
  onClick(event){
    console.log(event);
    this.greeting = 'Welcome to CodEvolution';
  }

logMessage(value){
    console.log(value);
}


}
