import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Profile } from '../../app/core/data/model/profile';
import { RegisterService } from '../../app/core/data/register.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: Profile = new Profile();
  leastOneCategory: Boolean;
  leastOneProficiency: Boolean;

  constructor(private registerService: RegisterService, private toastr: ToastrService) {
    this.model.category.single = false;
    this.model.category.doubles = false;
    this.model.category.mixed_doubles = false;
    // default
    this.model.proficiency = 'intermediate';
  }

  ngOnInit() {
  }

  onSelectionChange(input: String) {
this.model.proficiency = input;
  }



  onSubmit() {
    // Validation
    this.leastOneCategory = this.model.category.single || this.model.category.doubles || this.model.category.mixed_doubles;

    if (!this.leastOneCategory) {
      this.toastr.warning('Please select at least one category', 'Warning');
    }

    if (this.leastOneCategory) {
      this.createProfile();
    }
  }

  createProfile() {
    this.registerService.createProfile(this.model).subscribe(
      response => {
        this.toastr.success('You have registered Successfully', 'Success');
        console.log('saved');
      },
      error => {
        this.toastr.error('We could not save this!!! because you have registred already', 'Error');
        console.log('error', error);
        console.log('status', error.status);
      }

    );
  }

}
