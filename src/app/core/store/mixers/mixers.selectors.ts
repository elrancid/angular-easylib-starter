import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Mixer } from '../../red5/declarations';

import { MixersState } from './mixers.model';
export const getMixersState = createFeatureSelector<{ mixers: MixersState }>('mixers');

export const getMixers = createSelector(
  getMixersState,
  (state: { mixers: MixersState }) => state.mixers
);

export const getMixerById = (id: string) => createSelector(
  getMixersState,
  (state: { mixers: MixersState }) => state.mixers.find((mixer: Mixer) => mixer.id === id)
);
