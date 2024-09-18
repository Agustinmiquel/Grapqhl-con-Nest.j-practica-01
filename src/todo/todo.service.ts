import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { createDtoInput } from './dtos/inputs/create-todo.input';
import { updateDtoInput } from './dtos/inputs/update-todo.input';
import { StatusTodo } from './args/status.args';

@Injectable()
export class TodoService {
  private todoList: Todo[] = [
    {
      id: 1,
      description: 'Todo1',
      completed: true,
    },
    {
      id: 2,
      description: 'Todo2',
      completed: false,
    },
    {
      id: 3,
      description: 'Todo3',
      completed: true,
    },
  ];

  findAll(statusArgs: StatusTodo) {
    const { status } = statusArgs;
    if(status !== undefined) return this.todoList.filter(todo => todo.completed === status); 
    return this.todoList;
  }

  findOne(id: number):Todo {
    const todo = this.todoList.find(t => t.id === id);
    if(!todo){throw new NotFoundException('Todo not found id')}
    return todo;
  }

  createTodo(createDtoInput:createDtoInput):Todo{
    const todo = new Todo();
    todo.description = createDtoInput.description;
    todo.id = Math.floor(Math.random() * 1000);
    this.todoList.push(todo);
    return todo;
  }

  updateTodo(id:number,updateDtoInput:updateDtoInput){
    const { description, completed } = updateDtoInput;
    const todoUpdated = this.findOne(id);
    if(description) todoUpdated.description = description;
    if(completed !== undefined)todoUpdated.completed = completed;
    
    this.todoList = this.todoList.map(todo =>{
        return (todo.id === id) ? todoUpdated : todo;
    })
  }

  deleteTodo(id:number): Boolean{
    const todo = this.findOne(id);
    this.todoList = this.todoList.filter(todo => todo.id !== id);
    return true;
  }
}
