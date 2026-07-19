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
// 1. وظيفة فتح وقفل المينيو في الموبايل
function toggleMenu() {
  const navMenu = document.getElementById('navMenu');
  navMenu.classList.toggle('active');
}

// نربط الزرار بالدالة
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
  }
});

// 2. وظيفة فورم الحجز
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
  bookingForm.addEventListener('submit', function(e) {
    e.preventDefault(); // يمنع يوديك صفحة تانية
    
    // تجيب البيانات
    const name = this.querySelector('input[type="text"]').value;
    
    alert(`تم استلام طلبك بنجاح يا ${name} 💌 \nفريق Sara Beauty سيتواصل معك خلال 24 ساعة لتأكيد الحجز`);
    this.reset(); // يمسح الفورم بعد الارسال
  });
}}
