// Simple JavaScript for form submission
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission action
    alert("Thank you for your message! We'll get back to you soon.");
    // You can add AJAX here to send form data to a server
  });
  
  // Another possible script: change hero section content
  const heroTexts = [
    "Sip, Savor, Repeat. Your daily dose of delight.",
    "Brewed to Perfection, Served with Passion.",
    "Where Every Cup Tells a Story.",
  ];
  
  function changeHeroText() {
    const heroParagraph = document.querySelector("#hero .container p");
    let i = 0;
    setInterval(() => {
      heroParagraph.textContent = heroTexts[i];
      i = (i + 1) % heroTexts.length;
    }, 5000); // Change text every 5 seconds
  }
  
  changeHeroText();