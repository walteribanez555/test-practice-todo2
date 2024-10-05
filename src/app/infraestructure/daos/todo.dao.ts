// export interface Todo {
//   todos: TodoElement[];
//   total: number;
//   skip:  number;
//   limit: number;
// }

import { Result } from '../../domain/types/Result.type';

// export interface TodoElement {
//   id:        number;
//   todo:      string;
//   completed: boolean;
//   userId:    number;
// }

export class TodoDaoResponse {
  constructor(
    public readonly todos: TodoDao[],
    public readonly total: number,
    public readonly limit: number
  ) {}

  public static create(props: {
    [key: string]: any;
  }): Result<TodoDaoResponse, string> {
    const { todos, total, limit } = props;

    if (!todos) return { isSuccess: false, error: 'Todos required' };
    if (total == null) return { isSuccess: false, error: 'Total required' };
    if (limit == null) return { isSuccess: false, error: 'Limit required' };

    const todoDaos = todos
      .map((todo: TodoDao) => TodoDao.create(todo))
      .filter(
        (todoResult: Result<TodoDao, string>) => todoResult.isSuccess
      ) as TodoDao[];

    return {
      isSuccess: true,
      value: new TodoDaoResponse(todoDaos, total, limit),
    };
  }
}

export class TodoDao {
  constructor(
    public readonly id: number,
    public readonly todo: number,
    public readonly completed: number,
    public readonly userId: number
  ) {}

  public static create(props: { [key: string]: any }): Result<TodoDao, string> {
    const { id, todo, completed, userId } = props;

    if (id == null) return { isSuccess: false, error: 'Id is required' };
    if (!todo) return { isSuccess: false, error: 'Todo is required' };
    if (completed == null)
      return { isSuccess: false, error: 'Completed is required' };
    if (userId == null)
      return { isSuccess: false, error: 'User Id is required' };

    return { isSuccess: true, value: new TodoDao(id, todo, completed, userId) };
  }
}
