document.addEventListener('DOMContentLoaded', () => {
  console.log('Sara Beauty Loaded 🌸');
});

function bookNow(product) {
  window.location.href = `booking.html?product=${product}`;
}

function login(e){
  e.preventDefault();
  window.location.href = "home.html";
}