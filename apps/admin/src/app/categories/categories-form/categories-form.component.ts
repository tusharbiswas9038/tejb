import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriesService, Category } from '@tejb/products';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'tejb-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit {
form: FormGroup;
isSubmitted= false;
  constructor(private formBuilder:FormBuilder,private categoriesService:CategoriesService) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      name:['',Validators.required],
      icon:['']
    })
  }
  onSubmit(){
    this.isSubmitted= true;
    if(this.form.invalid){
      return;
    }
    const category:Category={
      name:this.categoryform.name.value,
      icon:this.categoryform.icon.value
    }
    this.categoriesService.createCategory(category).subscribe();


  }
get categoryform(){
  return this.form.controls;
}

}
