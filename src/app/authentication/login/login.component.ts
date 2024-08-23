import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { LoginModel } from '../../models/loginModel';
import { MasterService } from '../../services/master.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatCardModule , MatFormFieldModule , FormsModule , MatInputModule , MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private service:MasterService , private router:Router) { }

  _loginData : LoginModel = {
    username: '',
    password: ''
  }
  proceedLogin(form:any){
    if(form.valid){
      this.service.allowLogin(this._loginData).subscribe(
        item => {
          let response = item;
          if(response.length > 0){
            this.router.navigateByUrl('');
          }else{
            alert('Invalid credentials');
          }
        }
      )
    }
    
  }
}
