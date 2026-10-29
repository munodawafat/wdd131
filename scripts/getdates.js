
"use strict";

// Update the copyright year automatically.
const copyrightYear = document.querySelector("#copyright-year");

if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
}

// Display the webpage's last modification date.
const lastModified = document.querySelector("#last-modified");

if (lastModified) {
    const modifiedDate = new Date(document.lastModified);

    if (!Number.isNaN(modifiedDate.getTime())) {
        const formattedDate = new Intl.DateTimeFormat("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false
        }).format(modifiedDate);

        lastModified.textContent = formattedDate;
        lastModified.dateTime = modifiedDate.toISOString();
    }
}