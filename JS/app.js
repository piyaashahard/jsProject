/*  FOR  */

// for (let i = 1; i <= 10; i++) {
//   console.log("hello there");
// }

// for (let i = 2024; i >= 1905; i--) {
//   console.log(i);
// }

/*   FOREACH   */
// const favFruits = ["apple", "jackfruit", "banana"];

// favFruits.forEach((fruit) => {
//   console.log(`I love ${fruit}`);
// });

// favFruits.map((frt) => console.log(`I love ${frt}`));

const faqs = Array.from(document.querySelectorAll(".faq"));

const faqToggle = (event) => {
  const currentTarget = event.currentTarget;

  if (currentTarget.classList.contains("active")) {
    faqs.map((faq) => faq.classList.remove("active"));
  } else {
    faqs.map((faq) => faq.classList.remove("active"));
    currentTarget.classList.add("active");
  }
};

faqs.map((faq) => faq.addEventListener("click", faqToggle));

const popups = Array.from(document.querySelectorAll(".popup"));
const photoGallery = document.querySelector(".photoGallery");

let imagePosition = null;

const openGallery = (index, event) => {
  imagePosition = index;

  photoGallery.querySelector("img").src = event.target.src;
  photoGallery.classList.add("active");
};

popups.map((popup, index) =>
  popup.addEventListener("click", () => openGallery(index, event))
);

const leftArrow = photoGallery.querySelector(".leftArrow");

const beforeImage = () => {
  if (imagePosition == 0) {
    imagePosition = popups.length - 1;
    photoGallery.querySelector("img").src = popups[imagePosition].src;
  } else {
    photoGallery.querySelector("img").src = popups[imagePosition - 1].src;
  }
  imagePosition = imagePosition - 1;
};

leftArrow.addEventListener("click", beforeImage);

const rightArrow = photoGallery.querySelector(".rightArrow");

const nextImage = () => {
  if (imagePosition == popups.length - 1) {
    imagePosition = 0;
    photoGallery.querySelector("img").src = popups[imagePosition].src;
  } else {
    photoGallery.querySelector("img").src = popups[imagePosition + 1].src;
  }
  imagePosition = imagePosition + 1;
};

rightArrow.addEventListener("click", nextImage);

const cencleBtn = photoGallery.querySelector(".cencleBtn");

const closeGallery = () => {
  photoGallery.classList.remove("active");
};

cencleBtn.addEventListener("click", closeGallery);
