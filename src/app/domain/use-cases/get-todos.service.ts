import { Injectable } from '@angular/core';
import { TodoRepository } from '../respositories/todo.repository';
import { Result } from '../types/Result.type';
import { TodoDaoResponse } from '../../infraestructure/daos/todo.dao';
import { ReturnStatement } from '@angular/compiler';



export interface getTodosUseCase {
   execute( params : {[key:string] : any}): Promise<Result<TodoDaoResponse, string>>
}

@Injectable({
  providedIn: 'root'
})
export class GetTodosService implements getTodosUseCase {

  constructor(
    private repository : TodoRepository
  ) {

   }
  execute(params: { [key: string]: any; }): Promise<Result<TodoDaoResponse, string>> {
    return this.repository.getAll(params);
  }

}
