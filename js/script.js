const orderBtns = document.querySelectorAll(".order-btn");

const trendingItems = document.getElementById("trending-items");
const trendingMenu = document.getElementById("trending-menu");
const icon = document.querySelector("#trending-items .icon");

const modeSwith = document.querySelector(".slider");

trendingItems.addEventListener("click", () => {
  trendingMenu.classList.toggle("hidden");
  icon.classList.toggle("rotate-180");
});

// Popup Order Tap
orderBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let orderForm = `
    <form
      class="bg-white dark:bg-[#030711] px-10 py-5 rounded-lg w-[90%] md:w-[25rem] flex flex-col"
    >
      <div
        class="flex justify-between items-center mb-5 capitalize text-lg"
      >
        order your product
        <span id="close-btn" class="hover:text-rose-500">
          <i class="fa-solid fa-xmark cursor-pointer transition-color duration-300 ease-in-out hover:text-rose-500 text-2xl"></i>
        </span>
      </div>
      <input
        type="text"
        placeholder="Name"
        class="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
      />
      <input
        type="email"
        placeholder="Email"
        class="my-4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
      />
      <input
        type="text"
        placeholder="Address"
        class="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors"
      />

      <button
        type="submit"
        class="capitalize mt-5 cursor-pointer bg-secondary w-fit mx-auto px-6 py-2 rounded-full text-white font-medium hover:bg-zinc-700 transition-colors duration-300"
      >
        order now
      </button>
    </form>`;

    const tempDiv = document.createElement("div");
    tempDiv.className =
      "order-overlay fixed inset-0  bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm ";

    tempDiv.innerHTML = orderForm;
    document.body.appendChild(tempDiv);

    const closeBtn = document.getElementById("close-btn");
    const overlay = document.querySelector(".order-overlay");

    const closeMenu = () => {
      overlay.remove();
    };

    closeBtn.addEventListener("click", closeMenu);
  });
});

icon.addEventListener("click", () => {
  trendingMenu.classList.toggle("block");
});

// Toggle Dark Mode
modeSwith.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  speed: 400,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  simulateTouch: false,
});

// Setup ScrollReavel Opstions

ScrollReveal({
  duration: 2000,
  distance: "4rem",
  origin: "bottom",
  easing: "ease",
});

// Scroll NavBar
ScrollReveal().reveal("nav ", { origin: "left" });

// Reveal Home Section
ScrollReveal().reveal("#home .swiper-slide:first-of-type img", {
  distance: "20px",
  delay: 300,
});

ScrollReveal().reveal("#home .swiper-slide:first-of-type .info h1", {
  distance: "20px",
});
ScrollReveal().reveal("#home .swiper-slide:first-of-type .info p", {
  delay: 300,
});
ScrollReveal().reveal("#home .swiper-slide:first-of-type .info button", {
  delay: 500,
});

// Reveal Sections Header
ScrollReveal().reveal(".section-header *", {
  interval: 200,
});

// Reveal Top Selling Products
ScrollReveal().reveal("#top-rated .product-card", {
  delay: 200,
  interval: 200,
});
ScrollReveal().reveal("#top-rated button", {
  delay: 200,
});

// Reveal New Arrivals Products
ScrollReveal().reveal("#new-arrivals .product-card", {
  delay: 200,
  interval: 200,
});

// Reveal Winter Sale
ScrollReveal().reveal("#winter-sale img", {
  delay: 200,
});
ScrollReveal().reveal("#winter-sale .section-content *", {
  delay: 200,
  interval: 200,
});

//Revel Newslatter
ScrollReveal().reveal("#newsletter  *", {
  delay: 200,
  interval: 200,
});

//Revel Testimonial
ScrollReveal().reveal("#testimonial  .customer-opinion", {
  delay: 200,
  interval: 200,
});

//Revel Footer
ScrollReveal().reveal("footer .container", {
  delay: 200,
});
