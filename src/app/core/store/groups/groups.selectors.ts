import { createFeatureSelector, createSelector } from '@ngrx/store';

import { GroupsState } from './groups.model';
export const getGroupsState = createFeatureSelector<{ groups: GroupsState }>('groups');

export const getGroups = createSelector(
  getGroupsState,
  (state: { groups: GroupsState }) => state.groups,
);
