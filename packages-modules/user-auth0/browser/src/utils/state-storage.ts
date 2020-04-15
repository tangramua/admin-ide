const store = require('store');

export class StatePersistService {
    public static saveState = state => {
        try {
            const serializedState = JSON.stringify(state);

            store.set('state', serializedState);
        } catch (err) {
            // TODO
        }
    }

    public static clearState = () => {
        store.remove('state');
    }

    public static loadState = () => {
        try {
            const serializedState = store.get('state');

            if (serializedState === null) {
                return undefined;
            }

            return JSON.parse(serializedState);
        } catch (err) {
            return undefined;
        }
    }
}
