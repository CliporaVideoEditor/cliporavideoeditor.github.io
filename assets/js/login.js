/* ==========================================
   CLIPORA LOGIN JAVASCRIPT
========================================== */


/* ==========================================
   ELEMENTS
========================================== */

const loginForm =
    document.getElementById(
        "loginForm"
    );

const identifier =
    document.getElementById(
        "identifier"
    );

const password =
    document.getElementById(
        "password"
    );

const togglePassword =
    document.getElementById(
        "togglePassword"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );

const forgotPassword =
    document.getElementById(
        "forgotPassword"
    );

const githubLogin =
    document.getElementById(
        "githubLogin"
    );

const googleLogin =
    document.getElementById(
        "googleLogin"
    );


/* ==========================================
   SHOW / HIDE PASSWORD
========================================== */

togglePassword.addEventListener(
    "click",
    () => {

        const isPassword =
            password.type === "password";


        if (isPassword) {

            password.type = "text";

            togglePassword.textContent =
                "Hide";

            togglePassword.setAttribute(
                "aria-label",
                "Hide password"
            );

        } else {

            password.type = "password";

            togglePassword.textContent =
                "Show";

            togglePassword.setAttribute(
                "aria-label",
                "Show password"
            );

        }

    }
);


/* ==========================================
   LOGIN FORM
========================================== */

loginForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const user =
            identifier.value.trim();

        const pass =
            password.value;


        /*
            The real authentication system
            will be connected later.
        */


        if (!user || !pass) {

            formMessage.textContent =
                "Please enter your login information.";

            return;

        }


        formMessage.textContent =
            "Authentication isn't connected yet — we'll add it next!";

    }
);


/* ==========================================
   FORGOT PASSWORD
========================================== */

forgotPassword.addEventListener(
    "click",
    (event) => {

        event.preventDefault();


        formMessage.textContent =
            "Password recovery will be available once accounts are connected.";

    }
);


/* ==========================================
   GITHUB
========================================== */

githubLogin.addEventListener(
    "click",
    () => {

        formMessage.textContent =
            "GitHub login will be connected later.";

    }
);


/* ==========================================
   GOOGLE
========================================== */

googleLogin.addEventListener(
    "click",
    () => {

        formMessage.textContent =
            "Google login will be connected later.";

    }
);
