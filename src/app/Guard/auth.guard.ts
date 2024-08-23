import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let pathUrl = route.url || 'home';
  console.log(pathUrl[0].path);
  if(pathUrl[0].path == 'customer'){
    alert('You do not have access');
  }
  return false;
};
