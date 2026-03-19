// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const toTop = document.querySelector("#to-top");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Navbar Fix & Back to Top
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;

  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Click outside hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Dark Mode Toggle
const themeToggleBtn = document.querySelector("#theme-toggle");
const themeToggleDarkIcon = document.querySelector("#theme-toggle-dark-icon");
const themeToggleLightIcon = document.querySelector("#theme-toggle-light-icon");
const html = document.querySelector("html");

// Update icons based on current theme
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

themeToggleBtn.addEventListener("click", function () {
  // toggle icons
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // toggle theme
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.theme = "light";
  } else {
    html.classList.add("dark");
    localStorage.theme = "dark";
  }
});

// ScrollSpy Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("nav-active");
    a.classList.add("nav-inactive");
    if (a.getAttribute("href").includes(current) && current !== "") {
      a.classList.remove("nav-inactive");
      a.classList.add("nav-active");
    }
  });
});

// Lottie Animation Profile
if(document.getElementById("lottie-profile")) {
  lottie.loadAnimation({
    container: document.getElementById("lottie-profile"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "dist/img/profile.json"
  });
}

// Project Modal Logic
const projectsData = {
  keuangan: {
    title: "Financial Management System",
    image: "dist/img/portfolio/p_1.png",
    desc: "A comprehensive cash flow management platform engineered for Oofy Corp Surabaya. Features real-time transaction tracking, automated reporting, and efficient monthly budget monitoring.",
    office: "Oofy Corp Surabaya",
    stack: "PHP (Laravel), Tailwind CSS, JavaScript",
    db: "MySQL"
  },
  inventori: {
    title: "Inventory & Asset Management",
    image: "dist/img/portfolio/p_2.png",
    desc: "A robust data management system developed for Klagen Village to track and manage the lifecycle of village assets, from procurement to routine maintenance.",
    office: "Klagen Village Office",
    stack: "PHP (CodeIgniter), Bootstrap, jQuery",
    db: "MySQL"
  },
  compro: {
    title: "Corporate Profile & Portfolio",
    image: "dist/img/portfolio/p_3.png",
    desc: "A professional digital identity platform developed for PPSLB2 Surabaya. Focused on high-speed access and a clean UI/UX to effectively present corporate capabilities to global clients.",
    office: "PPSLB2 Surabaya",
    stack: "HTML5, CSS3, JavaScript (Vanilla)",
    db: "N/A"
  },
  sirute: {
    title: "Neighborhood Information System (SIRUTE)",
    image: "dist/img/portfolio/p_4.png",
    desc: "A localized digital monitoring system designed to track resident activities and population movement within neighborhood administrative levels (RT/RW), enhancing security and community data accuracy.",
    office: "Neighborhood Administrative Area (RT/RW)",
    stack: "Node.js, Express.js, Tailwind CSS",
    db: "MongoDB"
  },
  lms: {
    title: "Integrated LMS & Academic System",
    image: "dist/img/portfolio/p_5.png",
    desc: "A unified educational platform combining a modern Learning Management System for curriculum delivery with a centralized Academic Information System for student grading and administrative management.",
    office: "Private Education Institution",
    stack: "Laravel, React.js, Tailwind CSS",
    db: "PostgreSQL"
  }
};

const projectModal = document.getElementById('project-modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContainer = document.getElementById('modal-container');

function openProjectModal(id) {
  const data = projectsData[id];
  if (!data) return;

  document.getElementById('modal-title').innerText = data.title;
  document.getElementById('modal-image').src = data.image;
  document.getElementById('modal-desc').innerText = data.desc;
  document.getElementById('modal-office').innerText = data.office;
  document.getElementById('modal-stack').innerText = data.stack;
  document.getElementById('modal-db').innerText = data.db;

  projectModal.classList.remove('hidden');
  projectModal.classList.add('flex');
  
  setTimeout(() => {
    modalBackdrop.classList.remove('opacity-0');
    modalBackdrop.classList.add('opacity-100');
    modalContainer.classList.remove('scale-95', 'opacity-0');
    modalContainer.classList.add('scale-100', 'opacity-100');
  }, 10);
  
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  modalBackdrop.classList.remove('opacity-100');
  modalBackdrop.classList.add('opacity-0');
  modalContainer.classList.remove('scale-100', 'opacity-100');
  modalContainer.classList.add('scale-95', 'opacity-0');

  setTimeout(() => {
    projectModal.classList.add('hidden');
    projectModal.classList.remove('flex');
    document.body.style.overflow = 'auto';
  }, 300);
}

modalBackdrop.addEventListener('click', closeProjectModal);

// Experience Accordion Logic
function toggleExperience(id) {
  const content = document.getElementById('content-' + id);
  const icon = document.getElementById('icon-' + id);
  
  if (content.style.maxHeight && content.style.maxHeight !== '0px') {
    content.style.maxHeight = '0px';
    icon.style.transform = 'rotate(0deg)';
  } else {
    // Optional: Close all other accordions first
    // document.querySelectorAll("[id^='content-exp']").forEach(el => el.style.maxHeight = '0px');
    // document.querySelectorAll("[id^='icon-exp']").forEach(el => el.style.transform = 'rotate(0deg)');

    content.style.maxHeight = content.scrollHeight + 'px';
    icon.style.transform = 'rotate(180deg)';
  }
}
