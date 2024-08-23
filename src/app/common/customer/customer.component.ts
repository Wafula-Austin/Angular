import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [RouterOutlet , MatButtonModule , RouterLink , FormsModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnChanges , OnInit , DoCheck , AfterContentInit , AfterContentChecked , AfterViewChecked , AfterViewInit{
  userInput = "";
  ngOnInit(): void {
      console.log('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log('ngOnChanges');
  }

  ngDoCheck(): void {
      console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
      console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
      console.log('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
      console.log('ngAfterViewInit');
  }

}
