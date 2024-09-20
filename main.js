onload = () =>{
        document.body.classList.remove("container");
};
// Memutar audio otomatis saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
        const audio = document.getElementById('audio');
        audio.volume = 0.7;
        audio.play().catch(error => {
            console.log('Autoplay tidak diizinkan oleh browser:', error);
        });
    });

// Fungsi untuk memindahkan tombol No secara acak saat di-click
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('noButton');
    const Element = document.querySelector('.no');
    const QElement = document.querySelector('.question');
    const BElement = document.querySelector('.button');
    
    button.addEventListener('mouseover', function() {
        const maxWidth = window.innerWidth - button.offsetWidth;
        const maxHeight = window.innerHeight - button.offsetHeight;

        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);

        button.style.position = 'absolute';
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
    });
    
    button.addEventListener('click', function() {
        const maxWidth = window.innerWidth - button.offsetWidth;
        const maxHeight = window.innerHeight - button.offsetHeight;

        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);

        button.style.position = 'absolute';
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
    });

    let clickCount = 0;

    button.addEventListener('click', () => {
        // Menambahkan 1 pada jumlah klik setiap kali tombol diklik
        clickCount++;
      
        // Jika jumlah klik lebih dari 2, ubah tampilan elemen 'no'
        if (clickCount >= 3) {
          Element.style.display = 'block';
          QElement.style.display = 'none';
          BElement.style.display = 'none';
        }
      });
});

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('CloseButton');
    const SElement = document.getElementById('Surprise');
    const Element = document.querySelector('.no');
    const QElement = document.querySelector('.description');
    const BElement = document.querySelector('.button');
    const HElement = document.querySelector('.heart-shape');

    button.addEventListener('click', function(){
        if (Element) Element.style.display = 'block';
        if (QElement) QElement.style.display = 'none';
        if (BElement) BElement.style.display = 'none';
        if (HElement) HElement.style.display = 'none';
        if (SElement) SElement.style.display = 'none';
    });
});

document.getElementById('icon').addEventListener('click', function() {
    var textBox = document.getElementById('textBox');
    if (textBox.style.display === 'none') {
      textBox.style.display = 'block';
    } else {
      textBox.style.display = 'none';
    }
  });
  
