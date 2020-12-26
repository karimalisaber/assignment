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
    value: 'karim',
    type: ActionTypes.Label
  },
  {
    controler: 'email',
    placeholder: 'name',
    value: 'karim',
    type: ActionTypes.TextBox
  },

  {
    controler: 'test',
    placeholder: 'name',
    options: [
      {id: 1, name: 'karim'},
      {id: 2, name: 'karim'},
      {id: 3, name: 'karim'},
      {id: 4, name: 'karim'}
    ],
    value: 4,
    type: ActionTypes.Dropdown
  },
  {
    controler: 'check',
    placeholder: 'name',
    options: [
      {id: 1, placeholder: 'karim', value: true , controler: 'test'},
      {id: 2, placeholder: 'karim', value: true, controler: 'tfest'},
      {id: 3, placeholder: 'karim', value: true, controler: 'tefst'},
      {id: 4, placeholder: 'karim', value: true, controler: 'tesft'}
    ],
    value: null,
    type: ActionTypes.Checkbox
  },
  {
    controler: 'namfe',
    placeholder: 'name',
    value: 3,
    options: [
      {id: 1, placeholder: 'karim', controler: 'test'},
      {id: 2, placeholder: 'karim', controler: 'tfest'},
      {id: 3, placeholder: 'karim', controler: 'tefst'},
      {id: 4, placeholder: 'karim', controler: 'tesft'}
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

  dynamicForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.initForm();
  }

  // get user(){
  //   return this.dynamicForm.get('user') as FormArray
  // }
  
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
    // console.log(this.dynamicForm.get(source.));
    
     return item

    
  }


  convertJsonObjectToUserForm(){
    // this.dynamicForm.addControl('name', this.fb.control(''))
  }

}
