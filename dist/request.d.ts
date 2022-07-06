import { Request } from 'browser-search';
import memoize from 'memoizee';
export declare type AnyRequest = Request<any, any>;
export declare const hashRequest: ((request: AnyRequest) => string) & memoize.Memoized<(request: AnyRequest) => string>;
export declare const areRequestsEqual: (requestA: AnyRequest, requestB: AnyRequest) => boolean;
