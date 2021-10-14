import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  input = '';
  @Output() addItemClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  addForParent(){
    this.addItemClick.emit(this.input);
    this.input = '';
  }

  addTodo(){
    this.addItemClick.emit(this.input);
    this.input = '';
  }
}
