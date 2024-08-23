import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/loginModel';
import { User } from '../models/userModel';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  allowLogin(data : LoginModel){
    return this.http.get<User[]>('https://localhost3000/user?id='+data.username+'&password='+data.password);
  }
}
