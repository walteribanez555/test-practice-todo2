import { Injectable } from '@angular/core';
import { TodoRepository } from '../respositories/todo.repository';
import { Result } from '../types/Result.type';
import { TodoDao } from '../../infraestructure/daos/todo.dao';


export interface getTodoUseCase {
  execute( id : number) : Promise<Result<TodoDao, string>>
}

@Injectable({
  providedIn: 'root'
})
export class GetTodoService implements getTodoUseCase {

  constructor(
    private repository : TodoRepository,
  ) { }
  execute(id: number): Promise<Result<TodoDao, string>> {
    return this.repository.getOne(id);
  }

}
