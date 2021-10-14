import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() todoList!: { id: number, name: string, status: boolean}[];

  @Output() clickDeleteForRoot = new EventEmitter();
  @Output() clickChangeStatusForRoot = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteItem($event: any): void {
    this.clickDeleteForRoot.emit($event);
  }

  changeStatusForRoot($event: any){
    this.clickChangeStatusForRoot.emit($event);
  }
}
