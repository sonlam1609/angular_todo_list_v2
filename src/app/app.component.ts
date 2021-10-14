import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list-v2';
  list = [
    { id: 1, name: 'To do 1', status: true },
    { id: 2, name: 'To do 2', status: false },
    { id: 3, name: 'To do 3', status: true },
  ];

  addItem(name: string) {
    if (!name.length) {
      alert('Please enter input');
    } else {
      this.list.push({
        id: this.list[this.list.length - 1].id + 1,
        name: name,
        status: false,
      });
      name = '';
    }
  }

  removeTodo(id: number) {
    const index = this.list.findIndex((t) => t.id === id);
    this.list.splice(index, 1);
  }

  changeStatus($event: any) {
    const index = this.list.findIndex((t) => t.id === $event.id);
    this.list[index].status = !this.list[index].status;
  }
}
