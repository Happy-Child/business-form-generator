import { ComponentsView } from '@types';
import { createEvent, createStore } from 'effector';

export const $componentsView = createStore<ComponentsView>(
  {} as ComponentsView
);

export const setComponentsViewEvent = createEvent<
  Partial<ComponentsView> | undefined
>('setComponentsMapEvent');
