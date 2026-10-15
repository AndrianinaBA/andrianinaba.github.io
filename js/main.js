(function () {
  "use strict";

  /* ---- Dark / light theme ---- */
  var root = document.documentElement;
  document.getElementById("theme-toggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---- Mobile menu ---- */
  var menuBtn = document.getElementById("menu-btn");
  var links = document.getElementById("nav-links");
  function setMenu(open) {
    links.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
  }
  menuBtn.addEventListener("click", function () {
    setMenu(!links.classList.contains("open"));
  });
  links.addEventListener("click", function (e) {
    if (e.target.tagName === "A") setMenu(false);
  });

  /* ---- Highlight the nav link of the section in view ---- */
  var navLinks = Array.prototype.slice.call(links.querySelectorAll("a"));
  var sections = navLinks
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---- Figure lightbox ---- */
  var dlg = document.getElementById("lightbox");
  var dlgImg = document.getElementById("lightbox-img");
  var dlgCap = document.getElementById("lightbox-cap");

  Array.prototype.forEach.call(document.querySelectorAll(".fig-btn"), function (btn) {
    btn.addEventListener("click", function () {
      dlgImg.src = btn.getAttribute("data-full");
      dlgImg.alt = btn.querySelector("img").alt;
      dlgCap.textContent = btn.getAttribute("data-caption") || "";
      if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
    });
  });
  dlg.addEventListener("click", function (e) {
    // click on backdrop or the close button closes the dialog
    if (e.target === dlg || e.target.classList.contains("close")) dlg.close();
  });

  /* ---- Footer year ---- */
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
})();
