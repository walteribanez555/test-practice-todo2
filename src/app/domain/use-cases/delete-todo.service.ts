import { Injectable } from '@angular/core';
import { TodoRepository } from '../respositories/todo.repository';
import { Result } from '../types/Result.type';



export interface DeleteTodoUseCase {
   execute( id : number ) : Promise<Result<any, string>>
}

@Injectable({
  providedIn: 'root'
})
export class DeleteTodoService implements DeleteTodoUseCase {

  constructor(
    private repository : TodoRepository
  ) { }
  execute(id: number): Promise<Result<any, string>> {
    return this.repository.delete(id);
  }

}
