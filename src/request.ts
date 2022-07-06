import hash from 'object-hash';
import { Request } from 'browser-search';
import memoize from 'memoizee';

export type AnyRequest = Request<any, any>;

export const hashRequest = memoize(
  (request: AnyRequest): string => hashObject(request),
  {maxAge: 2000}
)


export const areRequestsEqual = (requestA: AnyRequest, requestB: AnyRequest): boolean => hashRequest(requestA) === hashRequest(requestB);

const hashObject = (object: object): string => hash(object, {algorithm: 'md5', unorderedArrays: true});
