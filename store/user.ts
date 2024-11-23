import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
    state: () => ({
        name: '',
        isLoggedIn: false,
    }),
    actions: {
        login(name: string) {
        },
        logout() {
        },
    },
});
