export interface LoginData {
    email: string,
    username: string,
    password: string
}

export interface Response {
    status: boolean,
    data: LoginData
}
