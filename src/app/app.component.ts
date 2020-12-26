import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl } from '@angular/forms';

enum ActionTypes  {
  Label,
  TextBox,
  Dropdown,
  Checkbox,
  RadioButton
}

const DefaulUser = [
  {
    controler: 'name',
    placeholder: 'name',
    value: 'karim Ali Hassan Saber',
    type: ActionTypes.Label
  },
  {
    controler: 'description',
    placeholder: 'description',
    value: 'front end developer',
    type: ActionTypes.TextBox
  },

  {
    controler: 'technology',
    placeholder: 'technology',
    options: [
      {id: 1, name: 'Vue'},
      {id: 2, name: 'Angular'},
      {id: 3, name: 'React'},
    ],
    value: 3,
    type: ActionTypes.Dropdown
  },
  {
    controler: 'Sports',
    placeholder: 'Sports',
    options: [
      {id: 1, placeholder: 'football', value: true , controler: 'test'},
      {id: 2, placeholder: 'swimming', value: true, controler: 'tfest'},
      {id: 3, placeholder: 'table tennis', value: true, controler: 'tefst'},
      {id: 4, placeholder: 'Running', value: true, controler: 'tesft'}
    ],
    value: null,
    type: ActionTypes.Checkbox
  },
  {
    controler: 'professional',
    placeholder: 'professional',
    value: 4,
    options: [
      {id: 1, placeholder: 'fresh'},
      {id: 2, placeholder: 'junior'},
      {id: 3, placeholder: 'mid level'},
      {id: 4, placeholder: 'senior'},
    ],
    type: ActionTypes.RadioButton
  },
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'code-chalenge';
  acitonTypes = ActionTypes;
  user = DefaulUser;
  isInvalidJson: boolean = false;

  dynamicForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.initForm();
  }
  
  initForm(){
    this.dynamicForm = this.fb.group({})
    this.setDefaultUser()
  }

  private setDefaultUser(){
    DefaulUser.forEach(field=>{
      if(field.type !== this.acitonTypes.Checkbox){
        this.dynamicForm.addControl(field.controler, this.fb.control(field.value))
      }else{
        this.dynamicForm.addControl(field.controler, this.fb.group(
          this.setCheckBoxGroubValues(field.options)
        ));
      }
    })
  }

  private setCheckBoxGroubValues(source: Array<any>): {} {
    const item = {}
    
    source.forEach(option=>{
       item[option.controler] = option.value      
    })
     return item
  }


  convertJsonObjectToUserForm(newUser){
    
    try{

      this.user = JSON.parse(newUser) 
      console.log(this.user);
      this.isInvalidJson = false;

    }
    catch{
      this.user = [];
      this.isInvalidJson = true;
    }
  }

  getDefaultUser(){
    this.user = DefaulUser
  }

}
