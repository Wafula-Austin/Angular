import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../custom/reverse.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReversePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  _class = 'inactive';
  title = 'Homepage';
  subtitle = 'This is the homepage';
  dateToday = new Date();
  money = 20000;
  _obj = { name: 'John' };
  isDisabled = false;
  isActive = false;

  customerInfo = [
    { name: 'John Doe', age: 25, city: 'New York', bg: 'orange' },
    { name: 'Jane Doe', age: 30, city: 'Los Angeles', bg: 'indigo' },
    { name: 'Michael Doe', age: 28, city: 'Chicago', bg: 'cyan' },
  ];

  _view = 'about';

  ChangeTitle() {
    this.title = 'Changed Title';
  }
  updateTitle(event: any) {
    this.title = event.target.value;
  }
}
