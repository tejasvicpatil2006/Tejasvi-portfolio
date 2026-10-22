/* =====================================
   TEJASVI PATIL - PORTFOLIO WEBSITE
   JavaScript Functionality
===================================== */


/* 1. Mobile Navigation Menu */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", isOpen);

    });


    // Close menu after clicking a navigation link

    const navigationLinks = navLinks.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("open");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-expanded", "false");

        });

    });

}


/* 2. Project Filter Buttons */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class from all buttons

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        // Highlight selected button

        button.classList.add("active");

        // Get selected filter

        const selectedFilter = button.dataset.filter;

        // Show or hide project cards

        projectCards.forEach(function (card) {

            const categories = card.dataset.category || "";

            if (
                selectedFilter === "all" ||
                categories.split(" ").includes(selectedFilter)
            ) {

                card.hidden = false;

            } else {

                card.hidden = true;

            }

        });

    });

});


/* 3. Smooth Navigation */

const allNavigationLinks = document.querySelectorAll('a[href^="#"]');

allNavigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* 4. Add Current Year to Footer if Needed */

const footer = document.querySelector("footer");

if (footer) {

    console.log("Tejasvi Patil Portfolio Website loaded successfully!");

}


/* 5. Email Link Reminder */

const emailLink = document.querySelector('a[href^="mailto:"]');

if (emailLink) {

    emailLink.addEventListener("click", function () {

        const emailAddress = emailLink.getAttribute("href");

        if (emailAddress.includes("YOUR_EMAIL")) {

            alert(
                "Please replace YOUR_EMAIL@example.com in index.html with your actual email address."
            );

        }

    });

}