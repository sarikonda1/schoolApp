
export * from './module.service';
import { ModuleService } from './module.service';
export * from './right.service';
import { RightService } from './right.service';
export * from './role.service';
import { RoleService } from './role.service';
export * from './localization.service';
import { LocalizationService } from './localization.service';
export const APIS = [ ModuleService, RightService, RoleService, LocalizationService];
