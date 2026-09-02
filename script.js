// =====================================
// EVENTX JAVASCRIPT
// =====================================


// ================= DARK MODE =================

const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    const icon = darkMode.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.className = "bi bi-sun-fill";

    } else {

        icon.className = "bi bi-moon-fill";

    }

});


// ================= EVENT FILTER =================

const filterButtons =
    document.querySelectorAll(".filter-btn");

const eventItems =
    document.querySelectorAll(".event-item");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        eventItems.forEach(function(event) {

            const category =
                event.getAttribute("data-category");

            if (
                filter === "all" ||
                filter === category
            ) {

                event.style.display = "";

            } else {

                event.style.display = "none";

            }

        });

    });

});


// ================= EVENT SEARCH =================

const searchEvent =
    document.getElementById("searchEvent");


searchEvent.addEventListener("input", function() {

    const text =
        searchEvent.value.toLowerCase().trim();


    eventItems.forEach(function(event) {

        const name =
            event.getAttribute("data-name")
            .toLowerCase();


        if (name.includes(text)) {

            event.style.display = "";

        } else {

            event.style.display = "none";

        }

    });

});


// ================= REGISTRATION =================

const registerButtons =
    document.querySelectorAll(".register-btn");

const selectedEvent =
    document.getElementById("selectedEvent");


registerButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const eventName =
            button.getAttribute("data-event");

        selectedEvent.value = eventName;

        const modalElement =
            document.getElementById("registrationModal");

        const modal =
            new bootstrap.Modal(modalElement);

        modal.show();

    });

});


// ================= REGISTRATION FORM =================

const registrationForm =
    document.getElementById("registrationForm");


registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("studentNameInput").value;

    const eventName =
        selectedEvent.value;


    alert(
        "🎉 Registration Successful!\n\n" +
        "Student: " + name +
        "\nEvent: " + eventName
    );


    registrationForm.reset();


    const modalElement =
        document.getElementById("registrationModal");

    const modal =
        bootstrap.Modal.getInstance(modalElement);

    if (modal) {
        modal.hide();
    }

});


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "✅ Message Sent Successfully!"
    );

    contactForm.reset();

});


// ================= COUNTDOWN =================

// Hackathon date

const eventDate =
    new Date("September 22, 2026 09:00:00").getTime();


function updateCountdown() {

    const now =
        new Date().getTime();

    const difference =
        eventDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference %
            (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference %
            (1000 * 60)) /
            1000
        );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);