// Login types
export interface LoginData {
    email: string,
    username: string
}

export interface LoginResponse {
    status: boolean,
    data: LoginData
}

// Cafe data types
export interface CafeData {
    cafeName: string,
    averageStars: number,
    Drinks: {
        drink_name: string,
        cafe_id: number
    }[],
    Review: {
        user_id: number,
        cafe_id: number | null,
        rating_id: number,
        comment: string | null,
        tasteRating: number,
        serviceRating: number,
        AtmosphereRating: number
    }[]
}

export interface CafeResponse {
    status: boolean,
    data: CafeData
}

// Signup data types
export interface SignupData {
    email: string,
    username: string,
    password: string
}

export interface SignupResponse {
    status: boolean,
    data: SignupData
}

// Review types
export interface ReviewData {
    rating_id: number,
    user_id: number,
    cafe_id: number,
    comment: string,
    tasteRating: number,
    serviceRating: number,
    AtmosphereRating: number
}
export interface ReviewResponse {
    status: boolean
}