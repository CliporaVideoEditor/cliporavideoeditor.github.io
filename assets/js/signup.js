/* ==========================================
   CLIPORA SIGNUP JAVASCRIPT
========================================== */


/* ==========================================
   ELEMENTS
========================================== */

const signupForm =
    document.getElementById(
        "signupForm"
    );

const username =
    document.getElementById(
        "username"
    );

const email =
    document.getElementById(
        "email"
    );

const password =
    document.getElementById(
        "password"
    );

const confirmPassword =
    document.getElementById(
        "confirmPassword"
    );

const togglePassword =
    document.getElementById(
        "togglePassword"
    );

const toggleConfirmPassword =
    document.getElementById(
        "toggleConfirmPassword"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );

const githubSignup =
    document.getElementById(
        "githubSignup"
    );

const googleSignup =
    document.getElementById(
        "googleSignup"
    );


/* ==========================================
   PASSWORD TOGGLE
========================================== */

togglePassword.addEventListener(
    "click",
    () => {

        if (
            password.type ===
            "password"
        ) {

            password.type =
                "text";

            togglePassword.textContent =
                "Hide";

        } else {

            password.type =
                "password";

            togglePassword.textContent =
                "Show";

        }

    }
);


/* ==========================================
   CONFIRM PASSWORD TOGGLE
========================================== */

toggleConfirmPassword.addEventListener(
    "click",
    () => {

        if (
            confirmPassword.type ===
            "password"
        ) {

            confirmPassword.type =
                "text";

            toggleConfirmPassword.textContent =
                "Hide";

        } else {

            confirmPassword.type =
                "password";

            toggleConfirmPassword.textContent =
                "Show";

        }

    }
);


/* ==========================================
   SIGNUP FORM
========================================== */

signupForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const user =
            username.value.trim();

        const mail =
            email.value.trim();

        const pass =
            password.value;

        const confirm =
            confirmPassword.value;


        /* Username validation */

        if (
            user.length < 3
        ) {

            formMessage.textContent =
                "Your username must be at least 3 characters.";

            return;

        }


        /* Password validation */

        if (
            pass.length < 8
        ) {

            formMessage.textContent =
                "Your password must be at least 8 characters.";

            return;

        }


        /* Password confirmation */

        if (
            pass !== confirm
        ) {

            formMessage.textContent =
                "Your passwords don't match.";

            return;

        }


        /*
            Real account creation will be
            connected once Clipora's backend
            authentication system is ready.
        */

        formMessage.textContent =
            "Account creation isn't connected yet — we'll add it next!";

    }
);


/* ==========================================
   GITHUB
========================================== */

githubSignup.addEventListener(
    "click",
    () => {

        formMessage.textContent =
            "GitHub signup will be connected later.";

    }
);


/* ==========================================
   GOOGLE
========================================== */

googleSignup.addEventListener(
    "click",
    () => {

        formMessage.textContent =
            "Google signup will be connected later.";

    }
);
