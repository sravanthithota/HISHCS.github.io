import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StatusCounts } from '../../models';
import { employees } from './employees';
import { process } from "@progress/kendo-data-query";
import { DataBindingDirective } from "@progress/kendo-angular-grid";
import { images } from './images';

@Component({
    selector: 'app-active-issues',
    templateUrl: 'active-issues.component.html',
    styleUrls: ['active-issues.component.css']
})
export class ActiveIssuesComponent implements OnInit {

    @Input() public statusCounts: StatusCounts | any;
    @ViewChild(DataBindingDirective) dataBinding: DataBindingDirective| any;
    public gridData: any[] = employees;
    public gridView: any[];
  
    constructor() {
        this.gridView = this.gridData;
     }
     


    public min: Date = new Date(1917, 0, 1);
    public max: Date = new Date(2020, 4, 31);

    public registerForm: FormGroup = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(),
        birthDate: new FormControl(new Date(2000, 10, 10)),
        email: new FormControl('', Validators.email),
        acceptNews: new FormControl()
    });
ngOnInit(): void {
}
    public submitForm(): void {
        this.registerForm.markAllAsTouched();
    }

    public clearForm(): void {
        this.registerForm.reset();
    }

   
    public mySelection: string[] = [];

  
    public onFilter(inputValue: string): void {
      this.gridView = process(this.gridData, {
        filter: {
          logic: "or",
          filters: [
            {
              field: "full_name",
              operator: "contains",
              value: inputValue,
            },
            {
              field: "job_title",
              operator: "contains",
              value: inputValue,
            },
            {
              field: "budget",
              operator: "contains",
              value: inputValue,
            },
            {
              field: "phone",
              operator: "contains",
              value: inputValue,
            },
            {
              field: "address",
              operator: "contains",
              value: inputValue,
            },
          ],
        },
      }).data;
      this.dataBinding.skip = 0;
    }
  
    private photoURL(dataItem: any): string {
      const code: string = dataItem.img_id + dataItem.gender;
      const image: any = images;
  
      return image[code];
    }
  
    private flagURL(dataItem: any): string {
      const code: string = dataItem.country;
      const image: any = images;
  
      return image[code];
    }
}


