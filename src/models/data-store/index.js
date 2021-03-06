// @flow

export interface IDataStore<T> {
    loading?: boolean;
    data?: T;
    error?: string|boolean|null;
    lastUpdated?: string|null;
}

const create = <T>(args: Object|IDataStore<T>): IDataStore<T> => {
    const {loading, data, error, lastUpdated} = args || {};
    const o = {
        loading: Boolean(loading),
        data: data || null,
        error: error || null,
        lastUpdated: lastUpdated || null
    };
    return Object.freeze(o);
};

const DataStore = {
    create
};

export default DataStore;
