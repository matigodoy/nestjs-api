import { Body, Controller, Post, ValidationPipe, Get, Delete, Put, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dtos/create-todo.dto';
import { UpdateTodoDto } from './dtos/update-todo-dto';

@Controller('todo')
export class TodoController {
    constructor(private todoService: TodoService) {

    }

    @Post()
    async create(@Body(new ValidationPipe()) createTodo: CreateTodoDto) {
        return this.todoService.create(createTodo);
    }

    @Get()
    async findAll() {
        return this.todoService.findAll();
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.todoService.remove(id);
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.todoService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body(new ValidationPipe()) updateTodo: UpdateTodoDto) {
        return this.todoService.update(id, updateTodo);
    }
}
