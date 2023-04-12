export interface AppStorage {
    get: (key: string) => string | null;
    set: (key: string, value: string) => void;
}

class Storage implements AppStorage {
    get(key: string): string | null {
        try {
            return window.localStorage.getItem(key);
        } catch {
            return null;
        }
    }

    set(key: string, value: string) {
        window.localStorage.setItem(key, value);
    }
}

export const appStorage = new Storage();
