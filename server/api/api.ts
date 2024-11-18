function Login(_username: string, _password: string) {
    let promise = $fetch("/api/login", {
        body: {
            name: _username,
            password: _password
        }
    });
    return promise;
}

function CreateAccount(_email: string, _username: string, _password: string) {
    let promise = $fetch("/api/createAccount", {
        body: {
            email: _email,
            username: _username,
            password: _password
        }
    });
    return promise;
}

function DeleteAccount(_email: string) {
    let promise = $fetch("/api/deleteAccount", {
        body: {
            email: _email
        }
    });
    return promise;
}

function ResetPassword(_email: string) {
    let promise = $fetch("/api/resetPassword", {
        body: {
            email: _email
        }
    });
    return promise;
}

function ChangePassword(_email: string, _password: string) {
    let promise = $fetch("/api/changePassword", {
        body: {
            email: _email,
            password: _password
        }
    });
    return promise;
}

function GetCafeList() {
    let promise = $fetch("/api/getCafeList");
    return promise;
}

function GetCafeData(_cafe: string) {
    let promise = $fetch("/api/getCafeData", {
        body: {
            cafe: _cafe
        }
    });
    return promise;
}

function SubmitReview(_cafe: string, _email: string, _taste: number, _service: number, _atmosphere: number, _review: string) {
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