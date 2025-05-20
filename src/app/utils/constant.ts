import { EAdministratorRole, EUserRole } from '../modules/User/user.interface';

export const paginationOptionKeys = ['page', 'limit', 'sortBy', 'sortOrder'];

export const managementRoles = [EUserRole.SUPER_ADMIN, EUserRole.ADMIN, EUserRole.LIBRARIAN];
export const administratorRoles = Object.values(EAdministratorRole);
export const allRoles = Object.values(EUserRole) as EUserRole[];
