import { TodoDao, TodoDaoResponse } from "../../infraestructure/daos/todo.dao";
import { CreateTodoDto } from "../dtos/create-todo.dto";
import { UpdateTodoDto } from "../dtos/update-todo.dto";
import { Result } from "../types/Result.type";

export abstract class TodoRepository {

  abstract create( dto : CreateTodoDto) : Promise<Result<TodoDao,string>>;

  abstract getOne( id : number) : Promise<Result<TodoDao, string>>;

  abstract getAll( params : {[key:string] : any}): Promise<Result<TodoDaoResponse, string>>;

  abstract update( dto : UpdateTodoDto) : Promise<Result<TodoDao, string>>;

  abstract delete( id : number) : Promise<Result<any, string>>


}
