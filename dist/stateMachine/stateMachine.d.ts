import { Maybe } from 'purify-ts/Maybe';
export declare type StateTransition<State, Action> = (state: State, action: Action) => Maybe<State>;
export declare const buildStateMachine: <State, Action>(stateTransitions: StateTransition<State, Action>[]) => (state: State, action: Action) => State;
