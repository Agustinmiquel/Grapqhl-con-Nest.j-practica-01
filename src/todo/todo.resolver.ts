import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { createDtoInput } from './dtos/inputs/create-todo.input';
import { updateDtoInput } from './dtos/inputs/update-todo.input';
import { StatusTodo } from './args/status.args';

@Resolver()
export class TodoResolver {

    constructor(private readonly todoService: TodoService){}

    @Query(()=>[Todo], {name: 'todos'})
    findAll(statusTodo:StatusTodo){
        return this.todoService.findAll(statusTodo);
    }

    @Query(()=>Todo, {name: 'todo'})
    findOne(@Args('id', {type: () => Int}) id:number){
        return this.todoService.findOne(id);
    }

    @Mutation(()=>Todo, {name: 'createTodo'})
    createTodo(@Args('createTodoInput') createTodoInput : createDtoInput){
        return this.todoService.createTodo(createTodoInput);
    }

    @Mutation(()=>Boolean, {name:'deleteTodo'})
    deleteTodo(@Args('id',{type: () => Int})id:number){
        return this.todoService.deleteTodo(id);
    }

    @Mutation(()=>Todo, {name:'updateTodo'})
    updateTodo(@Args('updateTodoInput') updateTodoInput : updateDtoInput){
        return this.todoService.updateTodo(updateTodoInput.id,updateTodoInput);
    }
}
