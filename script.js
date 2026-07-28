const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const celebration = document.getElementById('celebration');
const secretInput = document.getElementById('secretInput');
const unlockBtn = document.getElementById('unlockBtn');
const letterBox = document.getElementById('letterBox');
const message = document.getElementById('message');

if (noBtn && yesBtn && celebration) {
  let clicks = 0;

  noBtn.addEventListener('click', () => {
    clicks += 1;
    const moveX = (Math.random() * 120) - 60;
    const moveY = (Math.random() * 80) - 40;
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;

    if (clicks >= 4) {
      noBtn.textContent = 'Still no 😅';
    }
  });

  yesBtn.addEventListener('click', () => {
    celebration.classList.remove('hidden');
    celebration.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

if (unlockBtn && secretInput && letterBox && message) {
  unlockBtn.addEventListener('click', () => {
    const value = secretInput.value.trim().toLowerCase();
    if (value === 'i love you' || value === 'i love youu') {
      letterBox.classList.remove('hidden');
      message.textContent = 'The letter is open now, my love 💖';
    } else {
      message.textContent = 'Not yet... say it with your heart 💌';
    }
  });
}
