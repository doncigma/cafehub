export function Login(email, password) {
    try {
        const response = $fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: { bemail: email, bpassword: password }
        });
        console.log('apihandler: ', response.data.value)

        if (!response.ok) {
            throw new Error("Login failed");
        }

        return response.data.value;
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

// ^^ UP TO DATE ^^

export async function CreateAccount(email, password, username) {
    try {
        const response = await $fetch("/api/createAccount", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: { bemail: email, bpassword: password, busername: username }
        });

        if (!response.ok) {
            throw new Error("Account creation failed");
        }

        return response.data.value
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

export async function GetCafeList(cafeName) {
    try {
        const response = await $fetch("/api/getCafeList", {
            method: "GET",
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
        const response = await $fetch("/api/getCafeData", {
            method: "GET",
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

export async function SubmitReview(userEmail, userPassword, userName, { rating: [], text: undefined }) {
    try {
        const response = await $fetch("/api/submitReview", {
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
