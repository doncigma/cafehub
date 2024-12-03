export function Login(email, password) {
    try {
        const response = useFetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (!response.status) {
            throw new Error("Login failed");
        }
        const status = response.data.value.status;
        const data = response.data.value.data;

        return response.data.value;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

// ^^ UP TO DATE ^^

export async function CreateAccount(userEmail, userPassword, userName) {
    try {
        const response = await useFetch("/api/createAccount", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userEmail, userPassword, userName })
        });

        if (!response.ok) {
            throw new Error("Account creation failed");
        }

        const data = await response.json();
        return data.success ? "success" : "fail";
    }
    catch (error) {
        console.error(error);
        return "fail";
    }
}

export async function GetCafeList(cafeName) {
    try {
        const response = await useFetch("/api/getCafeList", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cafeName)
        });

        if (!response.ok) {
            throw new Error("Cafe list useFetch failed");
        }

        const data = await response.json();
        return data.success ? "success" : "fail";
    }
    catch (error) {
        console.error(error);
        return "fail";
    }
}

export async function GetCafeData(cafeName) {
    try {
        const response = await useFetch("/api/getCafeData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cafeName)
        });

        if (!response.ok) {
            throw new Error("Cafe data useFetch failed");
        }

        const data = await response.json();
        return data.success ? "success" : "fail";
    }
    catch (error) {
        console.error(error);
        return "fail";
    }
}

export async function SubmitReview(userEmail, userPassword, userName, {rating: [], text: undefined}) {
    try {
        const response = await useFetch("/api/submitReview", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userEmail, userPassword, userName })
        });

        if (!response.ok) {
            throw new Error("Review submission failed");
        }

        const data = await response.json();
        return data.success ? "success" : "fail";
    }
    catch (error) {
        console.error(error);
        return "fail";
    }
}
