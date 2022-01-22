import { createAction, props } from '@ngrx/store';

import { GroupsState } from './groups.model';

export const noActionGroups = createAction('[Groups] No action');

export const actionGroupsChange = createAction(
  '[Groups] Change Groups',
  props<{ groups: GroupsState }>()
);
