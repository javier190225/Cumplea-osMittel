// 🎂 Cuenta regresiva
function updateCountdown() {
    const targetDate = new Date("2025-08-07T23:59:59").getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = days > 0 ? days : "¡Se celebra hoy! 🎉";
}
updateCountdown();
setInterval(updateCountdown, 60000);

// 🎵 Música con letra y confetti
const music = document.getElementById('music');
const playBtn = document.getElementById('playBtn');
const lyrics = document.getElementById('lyrics');

playBtn.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        playBtn.classList.add('hidden');
        lyrics.classList.remove('hidden');
        confetti({
            particleCount: 150,
            spread: 90,
            origin: { y: 0.6 }
        });
    }
});
