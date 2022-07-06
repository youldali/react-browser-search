import { UseQueryErrorState, UseQueryIdleState, UseQueryLoadingState, UseQueryStaleState, UseQuerySuccessState } from '../useQuery';
export declare const getIdleStateFixture: () => UseQueryIdleState;
export declare const getLoadingStateFixture: <Document_1>(overrides?: Partial<UseQueryLoadingState<Document_1, string>> | undefined) => UseQueryLoadingState<Document_1, string>;
export declare const getSuccessStateFixture: <Document_1>(overrides?: Partial<UseQuerySuccessState<Document_1, string>> | undefined) => UseQuerySuccessState<Document_1, string>;
export declare const getStaleStateFixture: <Document_1>(overrides?: Partial<UseQueryStaleState<Document_1, string>> | undefined) => UseQueryStaleState<Document_1, string>;
export declare const getErrorStateFixture: <Document_1>(overrides?: Partial<UseQueryErrorState<Document_1, string>> | undefined) => UseQueryErrorState<Document_1, string>;
