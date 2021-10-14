import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() id!: number;
  @Input() name!: string;
  @Input() status!: boolean;

  @Output() clickToChangeStatusforList = new EventEmitter();
  @Output() clickDeleteForList = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  changeStatus() {
    this.clickToChangeStatusforList.emit({id:this.id ,status:this.status});
  }

  removeItem() {
    this.clickDeleteForList.emit(this.id);
  }
}
