import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-text',
  templateUrl: './floating-text.component.html',
  styleUrls: ['./floating-text.component.css']
})
export class FloatingTextComponent implements OnInit {

  imageText: string = "Welcome to Publicis Sapient. Have a great time.";

  constructor() { }

  ngOnInit(): void {
  }

}
