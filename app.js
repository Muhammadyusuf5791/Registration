const container = document.getElementById('container');
const navbar = document.getElementById('navbar');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

function toggleDisplay(activeBtn, inactiveBtn, showContainer) {
    container.style.display = showContainer ? 'flex' : 'none';
    navbar.style.display = showContainer ? 'none' : 'flex';

    // Faol tugmaga `active` klassini qo'shamiz
    activeBtn.classList.add('active');

    // Nofaol tugmadan `active` klassini olib tashlaymiz
    inactiveBtn.classList.remove('active');
}

// Eventlar
btn1.addEventListener('click', () => toggleDisplay(btn1, btn2, true));
btn2.addEventListener('click', () => toggleDisplay(btn2, btn1, false));
btn3.addEventListener('click', () => toggleDisplay(btn3, btn4, true));
btn4.addEventListener('click', () => toggleDisplay(btn4, btn3, false));
