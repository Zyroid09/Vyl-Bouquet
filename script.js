document.addEventListener("DOMContentLoaded", function () {
  const productCards = document.querySelectorAll(
    ".card[data-bs-toggle='modal']"
  );

  productCards.forEach((card) => {
    card.addEventListener("click", function () {
      const price = card.getAttribute("data-price");
      const image = card.getAttribute("data-image");
      const description = card.getAttribute("data-description");

      document.getElementById("modalImage").src = image;
      document.getElementById("modalPrice").textContent = price;
      document.getElementById("modalDescription").textContent = description;

      // Update links
      document.getElementById("shopeeLink").href = "https://id.shp.ee/knHZ5cz";
      document.getElementById("whatsappLink").href =
        "https://wa.me/+62882002048431";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarHeight = document.querySelector(".navbar").offsetHeight;
  const links = document.querySelectorAll("a[href^='#']");

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbarHeight - 10,
          behavior: "smooth",
        });
      }
    });
  });
});
