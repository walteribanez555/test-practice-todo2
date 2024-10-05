// export class TodoAction {
//   static readonly type = '[Todo] Add item';
//   constructor(readonly payload: string) { }
// }

import { CreateTodoDto } from '../../../domain/dtos/create-todo.dto';
import { UpdateTodoDto } from '../../../domain/dtos/update-todo.dto';
import { TodoEntity } from '../../../domain/entities/todo.entity';
import { iCallbackActions } from '../../interfaces/callback.interface';

export namespace TodoActions {
  export class GetTodo {
    static readonly type = '[TODO] Get item';
    constructor(
      readonly id: number,
      readonly callback?: iCallbackActions<TodoEntity[], string>
    ) {}
  }

  export class GetAll {
    static readonly type = '[TODO] Get All Items';
    constructor(
      readonly params: { [key: string]: any },
      readonly callback?: iCallbackActions<TodoEntity[], string>
    ) {}
  }

  export class Create {
    static readonly type = '[TODO] Create a todo';
    constructor(
      readonly dto: CreateTodoDto,
      readonly callback?: iCallbackActions<TodoEntity[], string>
    ) {}
  }

  export class Update {
    static readonly type = '[TODO] Update a todo';
    constructor(
      readonly dto: UpdateTodoDto,
      readonly callback?: iCallbackActions<TodoEntity[], string>
    ) {}
  }

  export class Delete {
    static readonly type = '[TODO] Delete a todo';
    constructor(
      readonly id: number,
      readonly callback?: iCallbackActions<TodoEntity[], string>
    ) {}
  }
}
