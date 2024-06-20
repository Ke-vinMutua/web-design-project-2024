document.addEventListener("DOMContentLoaded", function () {
  const mainLogoAnimation = () => {
    gsap.from(".letterL", { duration: 4, x: -260, ease: "bounce" });
    gsap.from(".oculus", { duration: 4, rotation: 360, ease: "bounce" });
    gsap.to(".oculus", {
      duration: 4,
      x: 21,
      y: -28,
      delay: 1.39,
      ease: "elastic",
    });
  };

  const dropDownAnimation = () => {
    const hiddenOculus1 = document.querySelector(".hiddenOculus1");
    const hiddenOculus2 = document.querySelector(".hiddenOculus2");
    const hiddenOculus3 = document.querySelector(".hiddenOculus3");

    const landing = document.querySelector(".lando");

    const distanceToTravel = landing.getBoundingClientRect().top;

    gsap.to(hiddenOculus1, {
      y: distanceToTravel,
      rotation: 360,
      scale: 0.8,
      duration: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: ".topTrigger",
        start: "top center",
        endTrigger: ".bottomtrigger",
        end: "top center",
        scrub: 1,
      },
    });
    gsap.to(hiddenOculus2, {
      y: distanceToTravel,
      rotation: 360,
      scale: 0.8,
      duration: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: ".topTrigger",
        start: "top center",
        endTrigger: ".bottomtrigger",
        end: "top center",
        scrub: 1.7,
      },
    });
    gsap.to(hiddenOculus3, {
      y: -distanceToTravel,
      rotation: 360,
      scale: 0.8,
      duration: 10,
      opacity: 0,
      scrollTrigger: {
        trigger: ".topTrigger",
        start: "top center",
        endTrigger: ".bottomtrigger",
        end: "top center",
        scrub: 1,
      },
    });
  };
  const processAnimation = () => {
    let processImg = document.querySelectorAll(".processIcon img");

    processImg.forEach((icon) => {
      icon.style.transformOrigin = "center center";
      gsap.set(icon, { scale: 0.5, opacity: 0.5 });

      const processAccord = icon.closest(".accordion-collapse");
      processAccord.addEventListener("show.bs.collapse", () => {
        gsap.to(icon, {
          scale: 0.85,
          opacity: 1,
          duration: 1,
          ease: "bounce",
        });
      });

      processAccord.addEventListener("hide.bs.collapse", () => {
        gsap.to(icon, {
          scale: 0.5,
          opacity: 0.5,
          duration: 0.3,
          ease: "ease.in",
        });
      });
    });
  };

  const railAnimation = () => {
    gsap.to(".railContainer", {
      x: "100%",
      duration: 20,
      opacity: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".railTrg",
        start: "top top",
        endTrigger: ".dRail",
        end: "bottom top",
        scrub: true,
      },
    });
  };

  const blinker = () => {
    const colors = ["#bf5a60", "#38c1ce", "#f5a437"];
    const blinkingLights = document.querySelectorAll(".blinkingLights rect");
    let colorIndex = 0;

    function changeBlinkColor() {
      blinkingLights.forEach((light) => {
        light.style.setProperty("--blink-color", colors[colorIndex]);
      });
      colorIndex = (colorIndex + 1) % colors.length;
    }

    setInterval(changeBlinkColor, 2000);
  };

  function navScroll() {
    let navLinks = document.querySelectorAll(".navbar-nav a");
    let sections = document.querySelectorAll("section");
    let navBar = document.getElementsByClassName("navbar-collapse");
    let navBackground = document.getElementsByClassName("customNav")[0];

    for (let i = 0; i < sections.length; i++) {
      let section = sections[i];
      let top = section.offsetTop - 70;
      let bottom = top + section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < bottom) {
        let target = section.getAttribute("id");
        navLinks.forEach(function (navLink) {
          navLink.classList.remove("active");
        });
        navLinks.forEach(function (navLink) {
          if (navLink.getAttribute("href") === "#" + target) {
            navLink.classList.add("active");
          }
        });
      }
    }
    for (let i = 0; i < navBar.length; i++) {
      navBar[i].classList.remove("show");
    }

    let windowHeight = window.innerHeight;
    let bodyHeight = document.body.offsetHeight;
    let scrollPercentage = (window.scrollY / (bodyHeight - windowHeight)) * 100;

    if (scrollPercentage > 5) {
      navBackground.style.opacity = "0.98";
    } else {
      navBackground.style.opacity = "1";
    }
  }

  mainLogoAnimation();
  blinker();
  navScroll();
  dropDownAnimation();
  processAnimation();
  railAnimation();
  window.addEventListener("scroll", navScroll);
});
