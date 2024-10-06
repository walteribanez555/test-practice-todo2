import { inject, Injectable, Signal } from '@angular/core';
import { Store } from '@ngxs/store';
import { TodoActions } from '../states/todo/todo.actions';
import { StatusAction } from '../enum/StatusAction.enum';
import { TodoSelectors } from '../states/todo/todo.selectors';
import { TodoEntity } from '../../domain/entities/todo.entity';
import { iCallbackActions } from '../interfaces/callback.interface';
import { CreateTodoDto } from '../../domain/dtos/create-todo.dto';
import { UpdateTodoDto } from '../../domain/dtos/update-todo.dto';

@Injectable({
  providedIn: 'root'
})
export class TodoFacadeService {

  private store = inject(Store);
  status : Signal<StatusAction> = this.store.selectSignal(TodoSelectors.getStatus);
  todos : Signal<TodoEntity[]> = this.store.selectSignal(TodoSelectors.getTodos);
  todo  : Signal<TodoEntity | null> = this.store.selectSignal(TodoSelectors.getTodoById);


  constructor() {
    this.store.dispatch(new TodoActions.GetAll({} , {
      onError : ( error ) => {
        console.log(error);

      },
      onLoading : ( ) => {

      },
      onResult : ( items : TodoEntity[]) => {
        console.log({items});
      }
    }));
   }



   getTodo( id : number,  callback? : iCallbackActions<TodoEntity | null, string>) {
     this.store.dispatch(new TodoActions.GetTodo(id,callback));
   }

   getTodos(params : {[key:string] : any}, callback? : iCallbackActions<TodoEntity[] , string>) {
    this.store.dispatch(new TodoActions.GetAll(params, callback));
   }

   create( dto : CreateTodoDto , callback? : iCallbackActions<TodoEntity, string>){
    this.store.dispatch(new TodoActions.Create(dto, callback));
   }

   update( dto : UpdateTodoDto , callback? : iCallbackActions<TodoEntity, string>) {
    this.store.dispatch(new TodoActions.Update(dto, callback));
   }


   delete( id : number, callback? : iCallbackActions<any, string>) {
    this.store.dispatch(new TodoActions.Delete(id, callback));
   }


}
