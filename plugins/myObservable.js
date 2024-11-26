// plugins/myObservable.js
import { observable } from 'vue'

export default function useMyObservable() {
  const state = observable({
    count: 0,
    message: 'Hello from observable!'
  })
  const increment = () => {
    state.count++
  }
  return {
    state,
    increment
  }
}

// export const useUserStore = defineStore('user', {
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
//             this.isLoggedIn = false;
//         },
//     },
// });
