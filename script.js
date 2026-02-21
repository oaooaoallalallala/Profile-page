function hamburg(){
    const dropdown = document.querySelector(".dropdown");
    dropdown.style.display = "flex";
}

function cancel(){
    const dropdown = document.querySelector(".dropdown");
    dropdown.style.display = "none";
}


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









window.addEventListener("load", () => {

    setTimeout(() => {

        const intro = document.getElementById("introScreen");
        const main = document.getElementById("mainSite");

        // Start intro exit
        intro.classList.add("intro-hide");

        // Start main reveal slightly after
        setTimeout(() => {
            main.classList.add("main-show");
        }, 400);

        // Remove intro completely
        setTimeout(() => {
            intro.style.display = "none";
        }, 1400);

    }, 1500);

});

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

function showPage(pageId){

    // 🔹 Close mobile menu first
    const dropdown = document.querySelector(".dropdown");
    dropdown.style.display = "none";

    // 🔹 Remove active from all pages
    document.querySelectorAll(".page").forEach(p=>{
        p.classList.remove("active");
    });

    // 🔹 Show selected page
    document.getElementById(pageId).classList.add("active");

    // 🔹 Scroll to top (important for phone)
    window.scrollTo(0,0);
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

function navigateMobile(page) {
    showPage(page);
    closeMenu();
}
function closeMenu() {
    document.querySelector(".dropdown").classList.remove("active");
}
