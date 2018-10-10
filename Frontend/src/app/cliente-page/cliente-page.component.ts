import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cliente-page',
  templateUrl: './cliente-page.component.html',
  styleUrls: ['./cliente-page.component.css']
})
export class ClientePageComponent implements OnInit {

  ngOnInit(): void {
  }

  title = "";
  isFailedMessage: boolean = false;
  isSuccessMessage: boolean = false;
  message = "";

  public globalResponse: any;
  clienteForm: FormGroup;
  //inputCliente: Customer;
  constructor(fb: FormBuilder) {
  
    this.clienteForm = fb.group({
      Title: ['', Validators.required],
      Name: ['', Validators.required],
      Gender: ['', Validators.required],
      Email: ['', Validators.required],
      Phone: ['', Validators.required],
      DOB:['', Validators.required],
    });
  }

  titles = [
    {key: 1, value: 'Mr.'},
    {key: 2, value: 'Mrs.'},
    {key: 3, value: 'Miss'}
  ];

  SubmitForm()
  {
    console.log(this.clienteForm.value);
    // this.inputCliente = this.clienteForm.value;
    // this.inputCliente.Title = this.clienteForm.controls['Title'].value.value;
    // this.inputCliente.DOB = this.clienteForm.controls['DOB'].value.toLocaleDateString ("es-CL");
    // this.inputCliente.id = 0;

  }

}
