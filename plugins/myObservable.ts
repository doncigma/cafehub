// import { observable } from 'vue'

// export default function useMyObservable() {
//     const state = observable({
//         email: '',
//         username: '',
//         isLoggedIn: false,
//     })

//     const methods = {
//         login(email: string, username: string) {
//             state.email = email;
//             state.username = username;
//             state.isLoggedIn = true;
//         },
//         logout() {
//             state.email = '';
//             state.username = '';
//             state.isLoggedIn = false;
//         }
//     }

//     return {
//         state,
//         methods
//     }
// }

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
