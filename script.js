

const texts = [
    "DEVELOPER",
    "STUDENT",
    "PROGRAMMER",
    "MATHEMATICS TUTOR"
];

let speed = 100;

const textElements = document.querySelector('.typewriter-text');

let textIndex = 0;  
let characterIndex = 0;

function typeWriter(){
    if(characterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    }
    else{
        setTimeout(eraseText, 1000);
    }
}

function eraseText(){
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;


function toggleCV(){
    const popup = document.getElementById("cvPopup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

function openCV(){
    document.getElementById("cvModal").style.display = "flex";
}

function closeCV(){
    document.getElementById("cvModal").style.display = "none";
}









window.addEventListener('load', () => {
    const intro = document.getElementById('introScreen');
    const main = document.getElementById('mainSite');

    // Make sure main site is ready but hidden
    main.style.display = 'block';
    main.style.opacity = '0';

    setTimeout(() => {
        // Fade out intro
        intro.style.transition = 'opacity 0.6s ease';
        intro.style.opacity = '0';
        
        // Fade in main site
        main.style.transition = 'opacity 0.8s ease';
        main.style.opacity = '1';

        setTimeout(() => {
            intro.remove(); // DELETE the intro screen entirely to free up memory
            
            // Start the typewriter ONLY after intro is gone
            if (typeof typeWriter === "function") {
                typeWriter();
            }
        }, 600);
    }, 2000);
});

// IMPORTANT: Delete the old "window.onload = typeWriter;" line at the bottom!
// IMPORTANT: Remove the old "window.onload = typeWriter" line 
// from the middle of your script.js file!

// Remove this line from the bottom of your script.js:
// window.onload = typeWriter;

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(p => {
        p.classList.remove("active");
    });
    document.getElementById(pageId).classList.add("active");
}


function openProject(id) {
    const modal = document.getElementById(id);

    modal.style.display = "flex";
    modal.classList.add("active");

    // 🔥 Increase view count
    increaseViews(id);
}
function closeProject(id) {
  const modal = document.getElementById(id);

  modal.classList.remove("active");
  modal.style.display = "none";

  // 🔥 RESET ALL PDF VIEWERS INSIDE
  const pdfs = modal.querySelectorAll(".pdf-viewer");

  pdfs.forEach(pdf => {
    pdf.style.display = "none";

    const iframe = pdf.querySelector("iframe");
    if (iframe) {
      iframe.src = iframe.src; // reload iframe
    }
  });
}
window.onclick = function(event) {
    document.querySelectorAll(".project-modal").forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

function showPDF(id){
    document.getElementById(id).style.display = "block";
}

function hidePDF(id){
    document.getElementById(id).style.display = "none";
}

function increaseViews(projectId) {

    let views = localStorage.getItem(projectId + "-views");

    if (!views) {
        views = 0;
    }

    views++;

    localStorage.setItem(projectId + "-views", views);

    document.getElementById("views-" + projectId).innerText = views;
}

window.onload = function() {

    const projects = ["project1", "project2", "project3"];

    projects.forEach(id => {
        let views = localStorage.getItem(id + "-views") || 0;
        document.getElementById("views-" + id).innerText = views;
    });

};
function toggleMenu() {
    mobileMenu.classList.toggle("active");
}

function navigateMobile(pageId) {
    // 1. Hide the menu
    mobileMenu.classList.remove("active");
    
    // 2. Show the page (using your existing function)
    showPage(pageId);
    
    // 3. Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function closeMenu(){
    dropdownMenu.classList.remove("active");
}

const menuBtn = document.querySelector('.hamburg');
const cancelBtn = document.querySelector('.cancel');
const dropdownMenu = document.querySelector('.dropdown');

menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.add('active');
    menuBtn.style.display = 'none';
    cancelBtn.style.display = 'block';
});

cancelBtn.addEventListener('click', () => {
    dropdownMenu.classList.remove('active');
    cancelBtn.style.display = 'none';
    menuBtn.style.display = 'block';
});

// Auto close when link tapped (important for phone)
document.querySelectorAll('.dropdown .links a').forEach(link => {
    link.addEventListener('click', () => {
        dropdownMenu.classList.remove('active');
        cancelBtn.style.display = 'none';
        menuBtn.style.display = 'block';
    });
});

hamburg.addEventListener('click', () => {
    dropdown.classList.add('open');
    hamburg.style.display = 'none';
    cancel.style.display = 'block';
});

cancel.addEventListener('click', () => {
    dropdown.classList.remove('open');
    cancel.style.display = 'none';
    hamburg.style.display = 'block';
});

// Close dropdown when a link is clicked
document.querySelectorAll('.dropdown .links a').forEach(link => {
    link.addEventListener('click', () => {
        dropdown.classList.remove('open');
        cancel.style.display = 'none';
        hamburg.style.display = 'block';
    });
});


function toggleMenu() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}

