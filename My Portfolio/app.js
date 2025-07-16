// Typing Animation
const typingElement = document.querySelector(".typing");
const words = ["Web Developer", "Programmer", "Student"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];

  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex--);
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 80 : 150);
}

if (typingElement) {
  typeEffect();
}



(function () {
  emailjs.init("PiY0dvNB1Epn8TE_w");
})();

// Form Submission
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm("service_4pvwr8e", "template_44o77nf", form)
        .then(function () {
          alert("Message sent successfully!");
          form.reset();
        }, function (error) {
          alert("Failed to send message. Please try again.");
         console.error("EmailJS error:", error);
        });
    });
  }
});
