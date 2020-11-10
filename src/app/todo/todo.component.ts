import {isNgTemplate} from '@angular/compiler'
import { Component, OnInit } from '@angular/core';
import{Todo}from './todo';
import{NgForm} from '@angular/forms';
import{FormsModule} from '@angular/forms'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task:'eat dinner',
      completed: false,
    },
    {
      task: 'workout',
      completed: false,
    },
    {
      task: 'wake up',
      completed: true,
    },
    {
      task: 'drink coffee',
      completed: false,
    },
  ]

  taskSearchTerm: string = '';

  constructor() { }

  ngOnInit(): void {}

  addTodo = (form: NgForm): void =>{
    let newTodo:Todo = {
      task: form.value.addtodo,
      completed: false
    }
    this.todos.push(newTodo)
    form.reset();
  }

  removeTask = (type:string, index:number):void =>{
    this.todos.splice(index,1)
  }

  completeTodo = (todo:Todo):void =>{
    todo.completed = true;
  }

  filterTasks = (): Todo[] =>{
    if(!this.taskSearchTerm) {
      return this.todos;
    }else{
      return this.todos.filter((todo)=>{
        let currentTaskName = todo.task.toLowerCase().trim();
        return currentTaskName.includes(this.taskSearchTerm.toLowerCase().trim());
      });
    }
  }
  
  setTaskSearchTerm = (form:NgForm): void =>{
    this.taskSearchTerm = form.value.filterTerm;
  };

  }


