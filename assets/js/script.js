/* ==========================================
   CLIPORA HOMEPAGE JAVASCRIPT
========================================== */


/* ==========================================
   MOBILE MENU
========================================== */

const menuButton =
    document.getElementById(
        "menuButton"
    );

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );


/*
    Open / close the mobile menu
*/

menuButton.addEventListener(
    "click",
    () => {

        const isOpen =
            mobileMenu.classList.toggle(
                "open"
            );


        /*
            Update accessibility state
        */

        menuButton.setAttribute(
            "aria-expanded",
            isOpen
        );


        /*
            Change the menu icon
        */

        if (isOpen) {

            menuButton.textContent = "✕";

        } else {

            menuButton.textContent = "☰";

        }

    }
);


/* ==========================================
   CLOSE MOBILE MENU AFTER LINK CLICK
========================================== */

const mobileLinks =
    mobileMenu.querySelectorAll(
        "a"
    );


mobileLinks.forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                mobileMenu.classList.remove(
                    "open"
                );


                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuButton.textContent =
                    "☰";

            }
        );

    }
);


/* ==========================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================== */

document.addEventListener(
    "click",
    (event) => {

        const clickedInsideMenu =
            mobileMenu.contains(
                event.target
            );

        const clickedButton =
            menuButton.contains(
                event.target
            );


        if (
            !clickedInsideMenu &&
            !clickedButton &&
            mobileMenu.classList.contains(
                "open"
            )
        ) {

            mobileMenu.classList.remove(
                "open"
            );


            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );


            menuButton.textContent =
                "☰";

        }

    }
);


/* ==========================================
   ESCAPE KEY
========================================== */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            mobileMenu.classList.contains(
                "open"
            )
        ) {

            mobileMenu.classList.remove(
                "open"
            );


            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );


            menuButton.textContent =
                "☰";

        }

    }
);
