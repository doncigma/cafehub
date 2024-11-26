export const useUserStore = defineStore('user', {
    state: () => ({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        isLoggedIn: false,
    }),
    actions: {
        login(email: string, firstName: string, lastName: string) {
            this.email = email;
            this.firstName = firstName;
            this.lastName = lastName;
            this.isLoggedIn = true;
        },
        logout() {
            this.email = '';
            this.firstName = '';
            this.lastName = '';
            this.isLoggedIn = false;
        },
    },
});

