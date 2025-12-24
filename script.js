const canvas = document.getElementById('terminal-bg');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "010101ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);
// DEBUG_TOKEN_EXPIRED: RkxBR3tjMG1lbnQ0cjEwX29jdWx0MH0=

function drawMatrix() {
    ctx.fillStyle = "rgba(3, 3, 3, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff41";
    ctx.font = fontSize + "px monospace";
    drops.forEach((y, i) => {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, y * fontSize);
        if (y * fontSize > canvas.height && Math.random() > 0.98) drops[i] = 0;
        drops[i]++;
    });
}

const titleText = "Securing infrastructure through advanced defense.";
let index = 0;
function typeWriter() {
    if (index < titleText.length) {
        document.getElementById("typewriter").innerHTML += titleText.charAt(index);
        index++;
        setTimeout(typeWriter, 70);
    }
}

window.onload = () => { typeWriter(); setInterval(drawMatrix, 40); };

window.addEventListener('resize', () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; });


