import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  let router = inject(Router);
  let pathUrl = route.url || 'home';
  console.log(pathUrl[0].path);
  return true;
};
