// LOAD NAVBAR
fetch("navbar.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;

    // MOBILE MENU
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (menuBtn) {
      menuBtn.onclick = () => {
        mobileMenu.classList.toggle("hidden");
      };
    }

    // LOGIN BUTTONS
    document.addEventListener("click", e => {
      if (e.target.id === "loginBtn" || e.target.id === "loginBtnMobile") {
        document.getElementById("loginModal")?.classList.remove("hidden");
        mobileMenu?.classList.add("hidden");
      }
    });
  });

// LOAD FOOTER
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer-container").innerHTML = data;
  });

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

reveals.forEach(el => observer.observe(el));