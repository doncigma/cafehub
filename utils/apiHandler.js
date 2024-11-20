import { APICreateAccount, APILogin } from "~/server/api/api.ts"

export function Login(userEmail, userPassword) {
    if (userEmail.trim() && userPassword.trim()) {
        APILogin(userEmail, userPassword);
    }
}

export function SignUp(userEmail, userPassword, userFirstName, userLastName) {
    if (userEmail.trim() && userPassword.trim() && userFirstName.trim() && userLastName.trim()) {
        APICreateAccount(userEmail, userPassword, userFirstName, userLastName);
    }
}