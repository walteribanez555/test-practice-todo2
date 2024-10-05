import { Injectable } from '@angular/core';
import { UpdateTodoDto } from '../dtos/update-todo.dto';
import { TodoRepository } from '../respositories/todo.repository';
import { Result } from '../types/Result.type';
import { TodoDao } from '../../infraestructure/daos/todo.dao';

export interface UpdateTodoUseCase {
   execute( dto : UpdateTodoDto) : Promise<Result<TodoDao, string>>
}

@Injectable({
  providedIn: 'root'
})
export class UpdateTodoService implements UpdateTodoUseCase {

  constructor(
    private repositoy : TodoRepository
  ) {


  }
  execute(dto: UpdateTodoDto): Promise<Result<TodoDao, string>> {
    return this.repositoy.update(dto);
  }

}
