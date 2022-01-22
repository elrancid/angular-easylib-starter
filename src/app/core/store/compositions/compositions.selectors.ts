import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Composition } from '../../red5/declarations';

import { CompositionsState } from './compositions.model';
export const getCompositionsState = createFeatureSelector<{ compositions: CompositionsState }>('compositions');

export const getCompositions = createSelector(
  getCompositionsState,
  (state: { compositions: CompositionsState }) => state.compositions
);

export const getCompositionById = (id: string) => createSelector(
  getCompositionsState,
  (state: { compositions: CompositionsState }) => state.compositions.find((composition: Composition) => composition.id === id)
);
