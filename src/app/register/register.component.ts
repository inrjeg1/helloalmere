import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Profile } from '../../app/core/data/model/profile';
import {RegisterService} from '../../app/core/data/register.service';
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: Profile = new Profile();

  constructor(private registerService: RegisterService, private toastr: ToastrService) {
    this.model.category.single = false;
    this.model.category.doubles = false;
    this.model.category.mixed_doubles = false;
    this.model.proficiency.beginner = false;
    this.model.proficiency.intermediate = false;
    this.model.proficiency.advanced = false;
   }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
this.registerService.createProfile(this.model).subscribe(
response => {
  this.toastr.success('Success', 'You have registered successfully');
  console.log('saved');
},
error => {
this.toastr.error('Error', error);
console.log('error', error);
}

);

  }

}
