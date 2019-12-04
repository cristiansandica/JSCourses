import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {


    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      userId: Math.random(),
      password: Math.random(),
      username: form.value.username
    }).subscribe(res =>{
     console.log(res);
    }, error => {
      console.log('something went wrong');
    });


  }

  functieTest(parametru1) {
    parametru1.innerHTML = "<span>mata</span>";
  }

}

