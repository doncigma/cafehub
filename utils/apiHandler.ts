export async function Login(email: string, password: string) {
    try {
        const response = await $fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: { bemail: email, bpassword: password }
        });                

        if (!response?.status) {
            throw new Error("Login failed");
        }

        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export async function CreateAccount(email: string, password: string, username: string) {
    try {
        const response = await $fetch("/api/createAccount", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: { bemail: email, bpassword: password, busername: username }
        });
        if (!response.status) {
            throw new Error("Account creation failed");
        }

        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export async function GetCafeData(cafeName: string) {
    try {
        const response = await $fetch("/api/getCafeData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: { bcafeName: cafeName }
        });

        if (!response?.status) {
            throw new Error("Cafe data fetch failed");
        }

        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export async function SubmitReview(username: string, ratings: { taste: number, service: number, atmosphere: number }, reviewContent: string) {
    try {
        const response = await $fetch("/api/submitReview", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: { busername: username, bratings: ratings, bcontent: reviewContent }
        });
        
        if (!response?.status) {
            throw new Error("Review submission failed");
        }

        return response;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}
