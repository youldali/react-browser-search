import { UseIndexValuesErrorState, UseIndexValuesIdleState, UseIndexValuesLoadingState, UseIndexValuesRequestPayload, UseIndexValuesResponsePayload, UseIndexValuesStaleState, UseIndexValuesSuccessState } from '../useIndexValues';
export declare const getResquestPayloadFixture: (overrides?: Partial<UseIndexValuesRequestPayload> | undefined) => UseIndexValuesRequestPayload;
export declare const getResponsePayloadFixture: <FieldValues = string>(overrides?: (FieldValues | undefined)[] | undefined) => UseIndexValuesResponsePayload<FieldValues>;
export declare const getIdleStateFixture: () => UseIndexValuesIdleState;
export declare const getLoadingStateFixture: (overrides?: Partial<UseIndexValuesLoadingState> | undefined) => UseIndexValuesLoadingState;
export declare const getSuccessStateFixture: <FieldValues = string>(overrides?: Partial<UseIndexValuesSuccessState<FieldValues>> | undefined) => UseIndexValuesSuccessState<FieldValues>;
export declare const getStaleStateFixture: <FieldValues = string>(overrides?: Partial<UseIndexValuesStaleState<FieldValues>> | undefined) => UseIndexValuesStaleState<FieldValues>;
export declare const getErrorStateFixture: (overrides?: Partial<UseIndexValuesErrorState> | undefined) => UseIndexValuesErrorState;
