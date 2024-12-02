interface StoreState {
    email: string | null;
    username: string | null;
    isLoggedIn: boolean;
}

const state = reactive<StoreState>({
    email: '',
    username: '',
    isLoggedIn: false,
})

interface StoreMethods {
    updateUser: (email: string, username: string) => void;
    clearUser: () => void;
    setLoggedIn: (status: boolean) => void;
}

const methods: StoreMethods = {
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

