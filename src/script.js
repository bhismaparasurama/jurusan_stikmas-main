// NAVBAR SCROLL

window.addEventListener("scroll", function () {
  let navbar = this.document.getElementById("navbar");
  if (this.window.scrollY > 10) {
    navbar.style.background = "var(--white)";
  } else {
    navbar.style.background = "transparent";
  }
});

function animateCounter(counterElement) {
  let target = +counterElement.getAttribute("data-target");
  let current = 0;
  let increment = target / 100;

  function updateCounter() {
    if (current < target) {
      current += increment;
      counterElement.innerText = Math.ceil(current);
      requestAnimationFrame(updateCounter);
    } else {
      counterElement.innerText = target;
    }
  }
  updateCounter();
}

document.addEventListener("DOMContentLoaded", function () {
  let counters = document.querySelectorAll(".counter");

  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target); // hanya sekali
        }
      });
    },
    {
      threshold: 0.5, // 50% dari elemen terlihat
    }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

// DROPDOWN
var dropdowns = document.querySelectorAll(".dropdown");

function dropdown(index) {
  dropdowns.forEach((dropdown, i) => {
    let arrow = dropdown.querySelector(".dd-arrow");
    let text = dropdown.querySelector(".dropdown-txt");

    if (i === index) {
      let isActive = dropdown.classList.toggle("active");
      arrow.style.transform = isActive ? "rotate(90deg)" : "rotate(0)";
      text.style.opacity = isActive ? "1" : "0";
      text.style.height = isActive ? "auto" : "0";
      text.style.marginBottom = isActive ? "1rem" : "0";
    } else {
      dropdown.classList.remove("active");
      arrow.style.transform = "rotate(0)";
      text.style.opacity = "0";
      text.style.height = "0";
      text.style.marginBottom = "0";
    }
  });
}

document.addEventListener("click", function (event) {
  let isClickInsideDropdown = false;

  dropdowns.forEach((dropdown) => {
    if (dropdown.contains(event.target)) {
      isClickInsideDropdown = true;
    }
  });

  // Jika klik di luar dropdown, tutup semua dropdown
  if (!isClickInsideDropdown) {
    dropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
      let arrow = dropdown.querySelector(".dd-arrow");
      let text = dropdown.querySelector(".dropdown-txt");

      arrow.style.transform = "rotate(0)";
      text.style.opacity = "0";
      text.style.height = "0";
      text.style.marginBottom = "0";
    });
  }
});

window.onload = function () {
  setTimeout(() => {
    let dropdown = dropdowns[0]; // Pilih dropdown pertama
    let arrow = dropdown.querySelector(".dd-arrow");
    let text = dropdown.querySelector(".dropdown-txt");

    // Tambahkan class active agar dropdown terbuka
    dropdown.classList.add("active");

    // Atur transformasi ikon agar langsung berputar
    arrow.style.transform = "rotate(90deg)";

    // Tampilkan teks dropdown dengan efek animasi
    text.style.opacity = "1";
    text.style.height = "auto";
    text.style.marginBottom = "1rem";
  }, 100); // Tambahkan delay 100ms untuk memastikan elemen sudah dirender
};


$(document).ready(function () {
  $("#openNav").click(function () {
    $(".nav-menu").addClass("show-nav");
    $("#openNav").hide();
  })
  $("#closeNav").click(function () {
    $(".nav-menu").removeClass("show-nav");
    $("#openNav").show();
  })
})




var swiper = new Swiper(".slider-wrapper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 40,
    },

  }
});