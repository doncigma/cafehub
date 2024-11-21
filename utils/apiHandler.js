export async function Login(email, password) {
    try {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error("Login failed");
        }

        const data = await response.json();
        return data.success ? "success" : "fail";
    }
    catch (error) {
        console.error(error);
        return "fail";
    }
}

export async function CreateAccount(userEmail, userPassword, userFirstName, userLastName) {
    try {
        const response = await fetch("/api/createAccount", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userEmail, userPassword, userFirstName, userLastName })
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
        const response = await fetch("/api/getCafeList", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cafeName)
        });

        if (!response.ok) {
            throw new Error("Cafe list fetch failed");
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
        const response = await fetch("/api/getCafeData", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cafeName)
        });

        if (!response.ok) {
            throw new Error("Cafe data fetch failed");
        }

        const data = await response.json();
        return data.success ? "success" : "fail";
    }
    catch (error) {
        console.error(error);
        return "fail";
    }
}

export async function SubmitReview(userEmail, userPassword, userFirstName, userLastName) {
    try {
        const response = await fetch("/api/submitReview", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userEmail, userPassword, userFirstName, userLastName })
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
