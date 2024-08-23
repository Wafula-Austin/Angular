import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from "../custom/reverse.pipe";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReversePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Homepage';
  subtitle = 'This is the homepage';
  dateToday = new Date();
  money = 20000;
  _obj = {"name" : "John",};
  isDisabled = false;

  ChangeTitle(){
    this.title = 'Changed Title';
  }
  updateTitle(event : any){
    this.title = event.target.value;
  }
}
