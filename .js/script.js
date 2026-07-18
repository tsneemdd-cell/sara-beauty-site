const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('#navMenu');
if(menuBtn){
  menuBtn.addEventListener('click', () => { navMenu.classList.toggle('active'); });
}

const bookingForm = document.getElementById('bookingForm');
if(bookingForm){
  bookingForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('تم استلام طلبك بنجاح! فريق Sara Beauty سيتواصل معك خلال 24 ساعة 💌');
    this.reset();
  });
}
