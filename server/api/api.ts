export function APILogin(_username: string, _password: string) {
    let promise = $fetch("/api/login", {
        body: {
            name: _username,
            password: _password
        }
    });
    return promise;
}

export function APICreateAccount(_email: string, _username: string, _password: string) {
    let promise = $fetch("/api/createAccount", {
        body: {
            email: _email,
            username: _username,
            password: _password
        }
    });
    return promise;
}

export function APIDeleteAccount(_email: string) {
    let promise = $fetch("/api/deleteAccount", {
        body: {
            email: _email
        }
    });
    return promise;
}

export function APIResetPassword(_email: string) {
    let promise = $fetch("/api/resetPassword", {
        body: {
            email: _email
        }
    });
    return promise;
}

export function APIChangePassword(_email: string, _password: string) {
    let promise = $fetch("/api/changePassword", {
        body: {
            email: _email,
            password: _password
        }
    });
    return promise;
}

export function APIGetCafeList() {
    let promise = $fetch("/api/getCafeList");
    return promise;
}

export function APIGetCafeData(_cafe: string) {
    let promise = $fetch("/api/getCafeData", {
        body: {
            cafe: _cafe
        }
    });
    return promise;
}

export function APISubmitReview(_cafe: string, _email: string, _taste: number, _service: number, _atmosphere: number, _review: string) {
    let promise = $fetch("/api/submitReview", {
        body: {
            cafe: _cafe,
            email: _email,
            taste: _taste,
            service: _service,
            atmosphere: _atmosphere,
            review: _review
        }
    });
    return promise;
}