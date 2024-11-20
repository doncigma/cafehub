import { APILogin } from "~/server/api/api.ts"

export function Login(userEmail, userPassword) {
    if (userEmail.trim() && userPassword.trim()) {
        APILogin(userEmail, userPassword);
    }
}