import { Maybe, Nothing } from 'purify-ts/Maybe';

export type StateTransition<State, Action> = (state: State, action: Action) => Maybe<State>;
export const buildStateMachine = <State, Action>(stateTransitions: StateTransition<State, Action>[]) => (state: State, action: Action): State => {
  const maybeNextState = stateTransitions.reduce(
    (maybeNextState: Maybe<State>, stateTransition: StateTransition<State, Action>): Maybe<State> => 
      maybeNextState.alt(stateTransition(state, action))
  , Nothing);

  return maybeNextState.caseOf({
    Just: (nextState) => nextState,
    Nothing: () => state,
  })
}
