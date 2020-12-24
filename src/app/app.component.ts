import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'code-chalenge';
  dynamicForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder){}

  ngOnInit(){

  }

  
  initForm(){
    this.dynamicForm = this.fb.group({
      name: 'karim',
      email: 'ali'
    })
  }

}
