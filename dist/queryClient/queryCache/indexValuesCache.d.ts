import * as BS from 'browser-search';
import { Maybe } from 'purify-ts/Maybe';
declare type IndexId = string;
declare type Request = {
    storeId: string;
    indexId: IndexId;
};
export declare const buildIndexValuesCache: () => {
    queryCache: <Value extends IDBValidKey>({ storeId, indexId }: Request) => Maybe<Promise<Value[]>>;
    addQueryToCache: <Value_1 extends IDBValidKey>({ storeId, indexId }: Request, query: Promise<Value_1[]>) => void;
    deleteStoreCache: (storeId: BS.StoreId) => void;
};
export {};
