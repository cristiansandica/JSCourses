import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curs';
  firstName = 'Sandica';
  lastName: 'Cristian';
  status: boolean;
  posts: object[];
  user = {
    username: '',
    password: ''
  };


  constructor() {
    console.log('constructor...');
    this.getUserStatus();
    this.posts = [
      {title: 'Post 1'},
      {title: 'Post 2'},
      {title: 'Post 3'}
    ];
    this.lastName = 'Cristian';
  }

  displayFirstName() {
    return this.firstName;
  }

  getUserStatus() {
    this.status = true;
  }

  greetPerson() {
    alert('Hi');
  }

  mousingOver() {
    alert('we re just moused over');
  }

  keyDowning() {
    console.log('key down');
  }

  onSubmit(theForm: NgForm) { // dupa : => typeof
    this.user.username = theForm.value.username;
    this.user.password = theForm.value.password;
    console.log(this.user);
  }

}
