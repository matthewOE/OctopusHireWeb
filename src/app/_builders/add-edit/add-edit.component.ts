import { Component, Input, OnInit } from '@angular/core';
import { data } from '../../../data/add-edit.json';
import { FormControl, FormGroup } from '@angular/forms';
import _ from "lodash"

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrl: './add-edit.component.css'
})
export class AddEditComponent implements OnInit{
    @Input() type: string;
    inputData;

    addEditForm: FormGroup;

    inputElements: any;

    ngOnInit(): void {
      try{
          this.inputData = _.cloneDeep(data[this.type]);

          let form = {};

          this.inputElements = this.inputData.inputElements;

          for(let element of this.inputElements){
            if(element.elementType !== 'image' && element.elementType !== 'button'){
              form[element.id] = new FormControl(element.value)
            }
            
          }

          this.addEditForm = new FormGroup(form);
      }catch{

      }
    }

    evaluateFunc(func, parameter1?: any, parameter2?: any, service?: string){
      if(typeof this[func] === "function"){
        this[func](parameter1, parameter2)
      }else if(service !== null && service !== undefined && service !== ''){
        if(typeof this[service][func] === "function"){
          let result = this[service][func](this.addEditForm, parameter1, parameter2);

          for(let key of Object.keys(result)){
            this[key] = result[key]
          }
        }
      }
    }

    onSave(){

    }
}
