import { RolesBuilder } from 'nest-access-control';
import { AppRoles } from './enum/app-roles.enum';

export const roles: RolesBuilder = new RolesBuilder();
roles
  .grant(AppRoles.USER_CREATE_ANY_VIDEO) // define new or modify existing role. also takes an array.
  .createOwn('video') // equivalent to .createOwn('video', ['*'])
  .deleteOwn('video')
  .readAny('video')
  .grant(AppRoles.ADMIN_UPDATE_OWN_VIDEO) // switch to another role without breaking the chain
  .extend(AppRoles.USER_CREATE_ANY_VIDEO) // inherit role capabilities. also takes an array
  .updateAny('video', ['title']) // explicitly defined attributes
  .deleteAny('video');
