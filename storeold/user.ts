export const useUserStore = defineStore('user', {
    state: () => ({
        email: '',
        username: '',
        isLoggedIn: false,
    }),
    actions: {
        login(email: string, username: string) {
            this.email = email;
            this.username = username;
            this.isLoggedIn = true;
        },
        logout() {
            this.email = '';
            this.username = '',
            this.isLoggedIn = false;
        },
    },
});

