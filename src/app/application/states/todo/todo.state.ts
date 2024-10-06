import { inject, Injectable } from '@angular/core';
import { State, Action, Selector, StateContext } from '@ngxs/store';
import { TodoActions } from './todo.actions';
import { TodoEntity } from '../../../domain/entities/todo.entity';
import { StatusAction } from '../../enum/StatusAction.enum';
import { GetTodoService } from '../../../domain/use-cases/get-todo.service';
import { GetTodosService } from '../../../domain/use-cases/get-todos.service';
import { CreateTodoDto } from '../../../domain/dtos/create-todo.dto';
import { CreateTodoService } from '../../../domain/use-cases/create-todo.service';
import { UpdateTodoService } from '../../../domain/use-cases/update-todo.service';
import { DeleteTodoService } from '../../../domain/use-cases/delete-todo.service';

export interface TodoStateModel {
  todos: TodoEntity[];
  todoById: TodoEntity | null;
  status: StatusAction;
}

@State<TodoStateModel>({
  name: 'todo',
  defaults: {
    todos: [],
    todoById: null,
    status: StatusAction.INITIAL,
  },
})
@Injectable()
export class TodoState {
  private readonly _getTodoUseCase = inject(GetTodoService);
  private readonly _getTodosUseCase = inject(GetTodosService);
  private readonly _createTodoUseCase = inject(CreateTodoService);
  private readonly _updateTodoUseCase = inject(UpdateTodoService);
  private readonly _deleteTodoUseCase = inject(DeleteTodoService);

  @Action(TodoActions.Create)
  async create(ctx: StateContext<TodoStateModel>, action: TodoActions.Create) {
    ctx.patchState({ status: StatusAction.ONLOADING });
    action.callback?.onLoading();

    try {
      const entityCreated = await this._createTodoUseCase.execute(action.dto);
      ctx.patchState({
        todos: [...ctx.getState().todos, entityCreated],
      });

      action.callback?.onResult(entityCreated);
    } catch (error) {
      action.callback?.onError(error as string);
    }
  }

  @Action(TodoActions.Update)
  async update(ctx: StateContext<TodoStateModel>, action: TodoActions.Update) {
    ctx.patchState({ status: StatusAction.ONLOADING });
    action.callback?.onLoading();

    try {
    } catch (err) {}
  }

  @Action(TodoActions.GetTodo)
  async getTodo(
    ctx: StateContext<TodoStateModel>,
    action: TodoActions.GetTodo
  ) {
    ctx.patchState({ status: StatusAction.ONLOADING });
    action.callback?.onLoading();

    try {
    } catch (error) {}
  }

  @Action(TodoActions.GetAll)
  async getAll(ctx: StateContext<TodoStateModel>, action: TodoActions.GetAll) {
    ctx.patchState({ status: StatusAction.ONLOADING });
    action.callback?.onLoading();

    try {

      const todos = await this._getTodosUseCase.execute(action.params);


      ctx.patchState({
        todos : todos.todos,
        status : StatusAction.INITIAL,
      })
      action.callback?.onResult(todos.todos);

    } catch (error) {
      action.callback?.onError(error as string);
    }
  }

  @Action(TodoActions.Delete)
  async delete(ctx: StateContext<TodoStateModel>, action: TodoActions.Delete) {
    ctx.patchState({ status: StatusAction.ONLOADING });
    action.callback?.onLoading();

    try {
    } catch (error) {}
  }
}
