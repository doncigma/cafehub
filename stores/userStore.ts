interface StoreState {
    email: string;
    username: string;
    isLoggedIn: boolean;
}

const state = reactive<StoreState>({
    email: '',
    username: '',
    isLoggedIn: false,
})

interface StoreMethods {
    getUser: () => {email: string, username: string};
    updateUser: (email: string, username: string) => void;
    clearUser: () => void;
    getLoggedIn: () => boolean;
    setLoggedIn: (status: boolean) => void;
}

const methods: StoreMethods = {
    getUser() {
        let email = state.email;
        let username = state.username;
        return {
            email,
            username
        }
    },
    updateUser(email: string, username: string) {
        state.email = email;
        state.username = username;
        state.isLoggedIn = true;
    },
    clearUser() {
        state.email = '';
        state.username = '';
        state.isLoggedIn = false;
    },
    getLoggedIn() {
        return state.isLoggedIn;
    },
    setLoggedIn(status) {
        state.isLoggedIn = status;
    }
}

export default function useUserStore() {
    return {
        state,
        methods
    }
}

