function createSymbol() {
  const symbols = ["+", "-", "*", "/", "=", "%", "π"];
  const symbol = document.createElement("div");
  symbol.className = "math-symbol";
  symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  symbol.style.left = Math.random() * window.innerWidth + "px";
  document.getElementById("math-background").appendChild(symbol);

  setTimeout(() => symbol.remove(), 5000); // Remove symbol after animation
}

setInterval(createSymbol, 300); // Adjust interval for more/less symbols

const phrases = ["Data Scientist", "AI Researcher"];
let currentPhrase = 0;
let currentChar = 0;
const textElement = document.getElementById("animatedText");
let typingSpeed = 50; // Decreased for faster typing
let deletingSpeed = 50; // Faster deleting speed
let pauseBetweenPhrases = 1000; // Shorter pause between phrases

function typePhrase() {
  if (currentChar < phrases[currentPhrase].length) {
    textElement.textContent += phrases[currentPhrase].charAt(currentChar);
    currentChar++;
    setTimeout(typePhrase, typingSpeed);
  } else {
    setTimeout(deletePhrase, pauseBetweenPhrases);
  }
}

function deletePhrase() {
  if (currentChar > 0) {
    textElement.textContent = phrases[currentPhrase].substring(
      0,
      currentChar - 1
    );
    currentChar--;
    setTimeout(deletePhrase, deletingSpeed);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(typePhrase, typingSpeed);
  }
}
setTimeout(typePhrase, typingSpeed);

window.addEventListener("load", (event) => {
  window.scrollTo(0, 0);
});

// document
//   .querySelector(".about-containers")
//   .addEventListener("mousemove", function (e) {
//     const containerWidth = this.offsetWidth;
//     const mouseX = e.pageX - this.getBoundingClientRect().left;
//     const percent = mouseX / containerWidth;
//     const totalScrollWidth = this.scrollWidth;
//     const newPosition = (totalScrollWidth - containerWidth) * percent;

//     this.scrollLeft = newPosition;
//   });

function showSection(sectionId) {
  // Hide both sections initially
  document.getElementById("all-projects").style.display = "none";
  document.getElementById("research-papers").style.display = "none";

  // Show the selected section
  document.getElementById(sectionId).style.display = "block";
}

// Initially show one section (optional)
showSection("research-papers"); // or 'all-projects'
