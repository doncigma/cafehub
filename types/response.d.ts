// Login types
export interface LoginData {
    email: string,
    username: string,
    password: string
}

export interface LoginResponse {
    status: boolean,
    data: LoginData
}

// Cafe data types
export interface CafeData {
    cafeName: string,
    averageStars: number,
    DrinkOffered: {
        drink_name: string,
        cafe_id: number
    }[],
    Rating: {
        rating_id: number,
        user_id: number,
        cafe_id: number | null,
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
export interface ReviewResponse {
    
}