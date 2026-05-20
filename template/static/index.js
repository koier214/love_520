let visitCount = 0;

function init() {
    const container = document.querySelector('.container');
    
    const counter = document.createElement('div');
    counter.className = 'counter';
    counter.id = 'visitCounter';
    counter.textContent = `💖 想你的次数: ${visitCount}`;
    container.appendChild(counter);
    
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.textContent = '吸一口雨送给你 ☔';
    btn.addEventListener('click', handleClick);
    container.appendChild(btn);
    
    loadVisitCount();
    createRainAnimation();
}

function handleClick() {
    visitCount++;
    updateCounter();
    saveVisitCount();
    
    const hearts = document.querySelectorAll('.heart');
    hearts.forEach((heart, index) => {
        setTimeout(() => {
            heart.style.animation = 'none';
            setTimeout(() => {
                heart.style.animation = 'pulse 1.5s ease-in-out infinite';
            }, 10);
        }, index * 100);
    });
    
    createFloatingHeart();
}

function updateCounter() {
    const counter = document.getElementById('visitCounter');
    if (counter) {
        counter.textContent = `💖 想你的次数: ${visitCount}`;
    }
}

function saveVisitCount() {
    localStorage.setItem('visitCount', visitCount.toString());
}

function loadVisitCount() {
    const saved = localStorage.getItem('visitCount');
    if (saved) {
        visitCount = parseInt(saved, 10);
        updateCounter();
    }
}

function createRainAnimation() {
    const rainContainer = document.querySelector('.rain-container');
    for (let i = 0; i < 15; i++) {
        const raindrop = document.createElement('div');
        raindrop.className = 'raindrop';
        raindrop.style.left = `${Math.random() * 100}%`;
        raindrop.style.animationDelay = `${Math.random() * 2}s`;
        raindrop.style.animationDuration = `${0.8 + Math.random() * 0.4}s`;
        rainContainer.appendChild(raindrop);
    }
}

function createFloatingHeart() {
    const floatHearts = document.querySelector('.float-hearts');
    const heart = document.createElement('span');
    heart.className = 'float-heart';
    heart.textContent = ['❤️', '💖', '💝', '💗', '💕'][Math.floor(Math.random() * 5)];
    heart.style.left = `${Math.random() * 80 + 10}%`;
    heart.style.animationDuration = `${6 + Math.random() * 4}s`;
    heart.style.fontSize = `${1.5 + Math.random()}em`;
    floatHearts.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

document.addEventListener('DOMContentLoaded', init);