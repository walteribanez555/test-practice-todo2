import { Injectable } from '@angular/core';
import { CreateTodoDto } from '../dtos/create-todo.dto';
import { TodoRepository } from '../respositories/todo.repository';
import { Result } from '../types/Result.type';
import { TodoDao, TodoDaoResponse } from '../../infraestructure/daos/todo.dao';
import { TodoEntity } from '../entities/todo.entity';

export interface CreateTodoUseCase {
  execute(dto: CreateTodoDto): Promise<TodoEntity>;
}

@Injectable({
  providedIn: 'root',
})
export class CreateTodoService implements CreateTodoUseCase {
  constructor(private repository: TodoRepository) {}
  async execute(dto: CreateTodoDto): Promise<TodoEntity> {
    const result: Result<TodoDao, string> = await this.repository.create(dto);

    if (!result.isSuccess) throw Error(result.error);

    const [err, entity] = TodoEntity.fromDAO(result.value);

    if (err) throw Error(err as string);

    return entity as TodoEntity;
  }
}
