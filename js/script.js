// JavaScript for Earth Club Website

// Toggle Hamburger Menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navMenu = document.querySelector(".nav-menu");

    hamburgerMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        hamburgerMenu.classList.toggle("close-icon"); // Add a class for the close icon
    });
});

// Smooth Scrolling for Links
const navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
            event.preventDefault();
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
            });
        }
    });
});

// Highlight Active Navigation Link
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-menu a");
    const currentPath = window.location.pathname.split("/").pop(); // Get the last part of the URL (e.g., "index.html", "about.html")

    navLinks.forEach((link) => {
        // Remove "active" class from all links
        link.classList.remove("active");

        // Get the href of the link (e.g., "index.html")
        const linkPath = link.getAttribute("href");

        // Highlight the link if it matches the current path
        if (currentPath === linkPath || (currentPath === "" && linkPath === "index.html")) {
            link.classList.add("active");
        }
    });
});


// Close Menu on Link Click (for smaller screens)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburgerMenu.classList.remove('open');
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // Store long descriptions for the events
    const eventDescriptions = {
        "Green Parliament": `Eastern Bank PLC (EBL), founded in 1992, is a leading private commercial bank in Bangladesh, committed to service excellence and sustainable growth. With a vision to become the most valuable brand in the financial sector, EBL focuses on sustainable banking and green financing, supporting environmental and social goals. The bank has launched eco-friendly initiatives, including financing renewable energy, promoting sustainable agriculture, and reducing its carbon footprint through energy-efficient practices. EBL's commitment extends to funding green projects aligned with the UN Sustainable Development Goals (SDGs), catering to eco-conscious customers, and strengthening its role as a transformative force in Bangladesh's financial sector.

Earth Club of North South University and the Department of Environmental Science and Management, dedicated to fostering a sustainable future, are thrilled to collaborate with Eastern Bank PLC to present "The Green Parliament." This prestigious event aims to ignite meaningful discussions and debates on pressing environmental and green financing issues. Bringing together bright minds from universities across Bangladesh, we strive to create a platform for intellectual exchange and innovative solutions.`,
        
        "Policy Innovation Challenge": `The South Asian Institute for Policy and Governance (SIPG) at North South University in collaboration with Earth Club of North South University proudly announces the organisation of a Policy Innovation Challenge (PIC), a pioneering initiative aimed at promoting intellectual engagement and policy innovation among the youth of today focusing on new aspirations concerning "Bangladesh 2.0". This competition is a testament to SIPG's commitment to fostering critical thinking, effective communication, and constructive contributions to policy discussions among aspiring policymakers, students, and intellectuals.

Set to unfold in the vibrant educational landscape on policy and governance, PIC offers a unique platform for aspiring policy enthusiasts to engage in critical evaluation, enhance their problem-solving abilities, and propose innovative solutions to real-world challenges. Through this initiative, SIPG seeks to cultivate a generation of thinkers and leaders equipped to navigate and influence the complex policy environment of the future.`
    };

    // Add event listeners to the "Read More" buttons
    const readMoreButtons = document.querySelectorAll(".read-more");
    readMoreButtons.forEach((button) => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Get the event container and title
            const eventContainer = button.parentElement;
            const eventTitle = eventContainer.querySelector("h2").textContent;

            // Replace the short description with the long description
            const description = eventContainer.querySelector("p");
            if (description.classList.contains("expanded")) {
                // If already expanded, collapse it
                description.textContent = `${description.dataset.shortText}...`;
                button.textContent = "Read More";
                description.classList.remove("expanded");
            } else {
                // Expand and show the full description
                description.textContent = eventDescriptions[eventTitle];
                button.textContent = "Show Less";
                description.classList.add("expanded");
            }
        });
    });

    // Store the short descriptions in a data attribute
    const eventDescriptionsShort = document.querySelectorAll(".event p");
    eventDescriptionsShort.forEach((description) => {
        description.dataset.shortText = description.textContent.trim();
    });
});


// Console Log to Ensure JS is Connected
console.log('Earth Club Website Script Loaded');

document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const post = button.previousElementSibling;
        const moreText = post.querySelector('.more-text');
        const isExpanded = moreText.style.display === 'inline';

        moreText.style.display = isExpanded ? 'none' : 'inline';
        button.textContent = isExpanded ? 'Read More' : 'Read Less';
    });
});