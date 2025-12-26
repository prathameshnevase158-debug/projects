<<<<<<< HEAD
/*************************************************
  1. Smooth Scroll for Navbar Links
*************************************************/
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});


/*************************************************
  2. Active Navbar Link on Scroll
*************************************************/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});


/*************************************************
  3. Navbar Background Change on Scroll
*************************************************/
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("nav-scroll");
  } else {
    navbar.classList.remove("nav-scroll");
  }
});


/*************************************************
  4. Typing Animation (Hero Section)
*************************************************/
const typingText = "Hi, I am Prathamesh | MERN Stack Developer";
let typingIndex = 0;

function startTyping() {
  if (typingIndex < typingText.length) {
    document.getElementById("typing").innerHTML += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(startTyping, 100);
  }
}
startTyping();


/*************************************************
  5. Scroll To Top Button
*************************************************/
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


/*************************************************
  6. Dark Mode Toggle
*************************************************/
const darkBtn = document.getElementById("darkBtn");

darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkBtn.innerText = "Light Mode";
  } else {
    darkBtn.innerText = "Dark Mode";
  }
});


/*************************************************
  7. Project Card Hover Animation (Extra Smooth)
*************************************************/
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});


/*************************************************
  8. Button Ripple Effect
*************************************************/
document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");

    const rect = this.getBoundingClientRect();
    ripple.style.left = (e.clientX - rect.left) + "px";
    ripple.style.top = (e.clientY - rect.top) + "px";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
=======
function toggleDark() {
  document.body.classList.toggle("dark");
}

>>>>>>> 20312985f523d300fa95ab079cf18e05219b6817
