const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
  item.addEventListener("click", () => {
    navItems.forEach(i => {
      i.classList.remove("active");
      i.removeAttribute("aria-current");
    });

    item.classList.add("active");
    item.setAttribute("aria-current", "page");
  });
});
