document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll(".navbar ul li a");

  links.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth"
      });
    });
  });
});
