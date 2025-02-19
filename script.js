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
      document.getElementById("shopeeLink").href = "https://shopee.co.id";
      document.getElementById("whatsappLink").href =
        "https://wa.me/081311862037";
    });
  });
});
