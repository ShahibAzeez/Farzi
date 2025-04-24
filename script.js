const roast = `Rihan Bhai Yha Kuch aisa Likhunga yaani tera roast Text But Baad mai. And Tu khud Bta mai kha likhu Yha pe Jis se Tu bahut Ganda Feel kre. Mai abhi bhi likh du but mero mann na maan ro kabhi tu gussa ho jay.
Mujhe Msg kr dena jb tera mann kre tb mai  yha likh dunga Jo mujhe  Likhna h
And Uper mai ek video Bhi daal dunga edit kr k baad mai Jb tu haa kr diye
And ek audio Bhi Ji Bahut Jyada Funny(gandi) Hogi`;

let i = 0;
const speed = 30;
const textElement = document.getElementById("roast-text");

function typeWriter() {
  if (i < roast.length) {
    textElement.innerHTML += roast.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;

function shareRoast() {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
  alert("Bhaiyo Aur Behno Ye rihan Ka roast Hai. Rihan ki Instagram Id Niche Hai!");
}

function shareToWhatsApp() {
  const url = "https://shahibazeez.netlify.app";
  const message = `Rihan Bhai Sorry : ${url}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
}

function shareToInstagram() {
  const url = "https://shahibazeez.netlify.app";
  const message = `Rihan Bhai Sorry : ${url}`;
  window.open(`https://www.instagram.com/alone_rk078?url=${encodeURIComponent(url)}`, '_blank');
}
