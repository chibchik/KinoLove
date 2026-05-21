// БЛОК 1
// --- Завдання 1: Зміна шрифту ---
const applyFontBtn = document.getElementById('apply-font-btn');
const fontOutput = document.getElementById('font-output-area');

function displayCustomText(text, size) {
    fontOutput.innerText = text;
    fontOutput.style.fontSize = size;
}

applyFontBtn.addEventListener('click', () => {
    const text = document.getElementById('font-text-input').value;
    const size = document.getElementById('font-size-input').value;
    displayCustomText(text, size);
});


// Завдання 2: Стрибаюча картинка
const img = document.getElementById('task2');

setInterval(() => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    
    img.style.left = x + 'px';
    img.style.top = y + 'px';
}, 1000);

// Завдання 3: Зміна <p> через setAttribute
const triggerPBtn = document.getElementById('trigger-p-change');

triggerPBtn.addEventListener('click', () => {
    const paragraphs = document.getElementsByTagName('p');
    for (let p of paragraphs) {
        p.setAttribute('style', 'font-size: 15px;');
    }
});


// Завдання 4: Текстовий годинник
const clock = document.getElementById('clock');
setInterval(() => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    clock.innerText = timeString;
}, 1000);

// Завдання 5: Ефект поступового витирання
const wipeTarget = document.getElementById('wipe-target');
const wipeBtn = document.getElementById('wipe-btn');
const resetBtn = document.getElementById('reset-wipe-btn');
let opacity = 1;
let wipeTimer = null;

wipeBtn.addEventListener('click', () => {
    if (wipeTimer) return; 

    wipeTimer = setInterval(() => {
        opacity -= 0.05;
        if (opacity <= 0) {
            opacity = 0;
            clearInterval(wipeTimer);
            wipeTimer = null;
        }
        wipeTarget.style.opacity = opacity;
    }, 100);
});

resetBtn.addEventListener('click', () => {
    clearInterval(wipeTimer);
    wipeTimer = null;
    opacity = 1;
    wipeTarget.style.opacity = opacity;
});



// БЛОК 2
// Завдання 3: Зміна кольору квадрата
const colorPicker = document.getElementById('color-picker');
const colorSquare = document.getElementById('color-square');

colorPicker.addEventListener('change', () => {
    const selectedColor = colorPicker.value;
    colorSquare.style.backgroundColor = selectedColor;
});

// Завдання 7: Розрахунок іпотеки
function calculatePerepl() {
    const S = 1000000;
    const p = 0.1;      
    const years = 5;
    const monthlyRate = p / 12;
    const months = years * 12;

    const monthlyPayment = S * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -months)));

    const totalPaid = monthlyPayment * months;

    const perepl = totalPaid - S;

    console.log(`Переплата по кредиту: ${perepl.toFixed(2)} грн.`);
    document.getElementById("perepl").innerText = `${perepl.toFixed(2)} грн.`;
}
calculatePerepl();

// 9. Сортування масиву об'єктів
const people = [
    { name: "Ivan", height: 180 },
    { name: "Anna", height: 165 },
    { name: "Oleg", height: 190 },
    { name: "Maria", height: 170 }
];
document.getElementById("inner-arr").innerText = JSON.stringify(people);

function sortByName(arr) {
    return [...arr].sort((a, b) => a.name.localeCompare(b.name));
}
document.getElementById("sort-by-name").innerText = JSON.stringify(sortByName(people));

function sortByHeight(arr) {
    return [...arr].sort((a, b) => b.height - a.height);
}
document.getElementById("sort-by-height").innerText = JSON.stringify(sortByHeight(people));

// 10. Заборона перегляду HTML-коду
// Можна обійти за допомогою вибору інструментів в меню браузера.
document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    alert("Перегляд HTML-коду заборонено!");
});

document.addEventListener('keydown', (e) => {
    if (
        e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) || 
        (e.ctrlKey && (e.key === 'u' || e.key === 'U') && e.shiftKey === false)
    ) {
        e.preventDefault();
        alert("Перегляд коду заборонено!");
    }
});

// Блок 3
//4. Потрібно написати регулярний вираз для пошуку в тексті номера кредитної картки. 
const textForRegInput = document.getElementById("text-for-reg-input");
const resultOfReg = document.getElementById("result-of-reg");

const regex = /\d{4}-\d{4}-\d{4}-\d{4}/g;
var result = textForRegInput.value.match(regex);
resultOfReg.innerText = JSON.stringify(result);

textForRegInput.addEventListener('input', () => {
    result = textForRegInput.value.match(regex);
    resultOfReg.innerText = JSON.stringify(result);
});


// 6. Розробити скрипт, щоб заборонити браузеру виділяти та копіювати текст.
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
});

document.addEventListener('copy', (e) => {
    e.preventDefault();
    alert('Копіювання тексту на цьому сайті заборонено!');
});

document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'C' || e.key === 'a' || e.key === 'A')) {
        e.preventDefault();
        alert('Копіювання тексту на цьому сайті заборонено!');
    }
});