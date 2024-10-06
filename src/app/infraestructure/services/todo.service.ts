
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { TodoRepository } from '../../domain/respositories/todo.repository';
import { CreateTodoDto } from '../../domain/dtos/create-todo.dto';
import { UpdateTodoDto } from '../../domain/dtos/update-todo.dto';
import { Result } from '../../domain/types/Result.type';
import { TodoDao, TodoDaoResponse } from '../daos/todo.dao';
import { firstValueFrom, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService extends TodoRepository {
  override create(dto: CreateTodoDto): Promise<Result<TodoDao, string>> {
    throw new Error('Method not implemented.');
  }

  override getOne(id: number): Promise<Result<TodoDao, string>> {
    throw new Error('Method not implemented.');
  }
  override getAll(params: { [key: string]: any; }): Promise<Result<TodoDaoResponse, string>> {
    return firstValueFrom(this._http.get(this._url, {params}).pipe(
      map( response => {
        const result = TodoDaoResponse.create(response);
        if(!result.isSuccess) return {
          isSuccess: false,
          error : `DAOS ERROR : ${result.error}`
        }
        return {
          isSuccess : true,
          value : result.value
        }

      })
    ))
  }
  override update(dto: UpdateTodoDto): Promise<Result<TodoDao, string>> {
    throw new Error('Method not implemented.');
  }
  override delete(id: number): Promise<Result<any, string>> {
    throw new Error('Method not implemented.');
  }

  private _url = environment.api_url;

  private _http = inject(HttpClient);

  constructor() {
    super();

  }

}
