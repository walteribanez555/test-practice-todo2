import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngxs/store';
import { TodoRepository } from './domain/respositories/todo.repository';
import { TodoService } from './infraestructure/services/todo.service';
import { TodoState } from './application/states/todo/todo.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    {
      useClass :TodoService,
      provide: TodoRepository,
    },
    provideStore([TodoState]),
  ],
};
