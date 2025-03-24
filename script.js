document.addEventListener("DOMContentLoaded", () => {
    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Remove active class from all links and contents
            tabLinks.forEach(l => l.classList.remove("active"));
            tabContents.forEach(c => c.classList.remove("active"));

            // Add active class to clicked link and corresponding content
            link.classList.add("active");
            const tabId = link.getAttribute("data-tab");
            document.getElementById(tabId).classList.add("active");
        });
    });
});
