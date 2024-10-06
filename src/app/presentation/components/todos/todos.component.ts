import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { TodoFacadeService } from '../../../application/facade/todo-facade.service';
import { TodoEntity } from '../../../domain/entities/todo.entity';
import { StatusAction } from '../../../application/enum/StatusAction.enum';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './todos.component.html',
})
export class TodosComponent {

  private facadeService = inject(TodoFacadeService);

  constructor() {

  }


  todos$ : Signal<TodoEntity[]> = this.facadeService.todos;
  todoById : Signal<TodoEntity | null> = this.facadeService.todo;
  status : Signal<StatusAction> = this.facadeService.status;


  onCreate() {

  }

  onUpdate( ) {

  }

  onDelete() {

  }

 }
