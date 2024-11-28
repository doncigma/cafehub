interface StoreState {
    email: string;
    username: string;
    isLoggedIn: boolean;
}

export const store = reactive<StoreState>({
    email: '',
    username: '',
    isLoggedIn: false,
})

interface StoreMethods {
    updateUser: (email: string, username: string) => void;
    clearUser: () => void;
    setLoggedIn: (status: boolean) => void;
}

export const methods: StoreMethods = {
    updateUser(email: string, username: string) {
        store.email = email;
        store.username = username;
        store.isLoggedIn = true;
    },
    clearUser() {
        store.email = '';
        store.username = '';
        store.isLoggedIn = false;
    },
    setLoggedIn(status) {
        store.isLoggedIn = status;
    }
}

// export useUserStore('user', {
//     state: () => ({
//         email: '',
//         username: '',
//         isLoggedIn: false,
//     }),
//     actions: {
//         login(email: string, username: string) {
//             this.email = email;
//             this.username = username;
//             this.isLoggedIn = true;
//         },
//         logout() {
//             this.email = '';
//             this.username = '',
//                 this.isLoggedIn = false;
//         },
//     },
// });
