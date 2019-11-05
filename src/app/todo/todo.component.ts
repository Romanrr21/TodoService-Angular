import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService, private userService: UserService) {

  }

  ngOnInit() {
    this.todoService.getTodoByUserId(this.userService.getUserId()).subscribe(
      response => {
        console.log("success response:", response);
      },
      error => {
        console.log("error:", error);

      }
    );
  }
}
