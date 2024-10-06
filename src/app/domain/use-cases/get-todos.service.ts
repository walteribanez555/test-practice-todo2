import { Injectable } from '@angular/core';
import { TodoRepository } from '../respositories/todo.repository';
import { Result } from '../types/Result.type';
import { TodoDaoResponse } from '../../infraestructure/daos/todo.dao';
import { ReturnStatement } from '@angular/compiler';
import { TodoEntity } from '../entities/todo.entity';

export interface getTodosUseCase {
  execute(params: {
    [key: string]: any;
  }): Promise<{ todos: TodoEntity[]; total: number; limit: number }>;
}

@Injectable({
  providedIn: 'root',
})
export class GetTodosService implements getTodosUseCase {
  constructor(private repository: TodoRepository) {}
  async execute(params: { [key: string]: any }): Promise<{
    todos: TodoEntity[];
    total: number;
    limit: number;
  }> {
    try {
      const result = await this.repository.getAll(params);


      if (!result.isSuccess) throw Error(result.error);



      const todos: TodoEntity[] = [];
      result.value.todos.forEach((todoDao) => {
        const [err, entity] = TodoEntity.fromDAO(todoDao);

        if (err) throw Error(err as string);

        todos.push(entity as TodoEntity);
      });

      return {
        todos,
        limit: result.value.limit,
        total: result.value.total,
      };
    } catch (error) {
      throw Error(('Error on Usecase: ' + error) as string);
    }
  }
}
