import {Component} from '@angular/core';
import {DataService} from './data.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hey Guys!</h1>
    <h2>{{myObject.location}}</h2>

    <div *ngIf="myArr; then tmpl1 else tmpl2">Yeah, I exist.</div>
    <ng-template #tmpl1>Truth</ng-template>
    <ng-template #tmpl2>False</ng-template>
    <button [disabled]="buttonStatus == 'enabled'">My Button</button>
    <button (click)="myEvent($event)">My Button</button>
    <h2 [ngClass]="titleClass">Hello!</h2>
    <h3 [ngStyle]="titleStyles">Hello</h3>
    <h2>{{ someProperty}}</h2>
    <p [@myAnimation]='state' (click)="animateMe()">I will animate</p>
  `,
  styles: [`
    h1 {
      text-decoration: underline;
    }

    p {
      width: 200px;
      background: lightgray;
      margin: 100px auto;
      text-align: center;
      padding: 20px;
      font-size: 1.5em;
    }

    .red-title {
      color: blue;
    }
  `],
  animations: [
    trigger('myAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(1.2)',
      })),

      transition('small <=> large', animate('300ms ease-in', keyframes(
        [style({opacity: 0, transform: 'translatey(-75%)', offset: 0}),
          style({opacity: 1, transform: 'translatey(35px)', offset: .5}),
          style({opacity: 1, transform: 'translatey(0)', offset: 1}),
]))),
]),
]
})

export class AppComponent {
  state: string = 'small';
  buttonStatus = 'enabled';

  titleStyles = {
    'color': 'red',
    'font-size': '4em'


  };
  myObject = {
    gender: 'male',
    age: 33,
    location: 'USA'
  };

  myArr = false;
  titleClass = 'red-title';


  someProperty: string = '';


  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    console.log(this.dataService.cars);
    this.someProperty = this.dataService.myData();
  }

  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  myEvent(event) {
    console.log(event);
  }

}
