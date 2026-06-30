let btn_green=document.querySelector('.btn-green');
let ba=document.querySelector('.ba');
btn_green.addEventListener('click', () => {
    // اگر می‌خوای تگ ba نمایش داده بشه:
    ba.style.display = 'block'; 
    
    // و اگر هنوز می‌خوای کلاس‌ها رو هم عوض کنی:
    ba.classList.remove('hiden');
    ba.classList.add('not-hiden');
    
    console.log('حالا درست شد!');
});