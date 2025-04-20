// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});

// Add your javascript here

id="responseMessage"
const form = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const formData = new FormData(form);

      fetch("https://formspree.io/f/meoaprrb", {
        method: "POST",
        body: formData,
        headers: {
          "Accept": "application/json"
        }
      })
      .then(response => {
        if (response.ok) {
          responseMessage.textContent = "✅ Message sent successfully!";
          responseMessage.style.color = "green";
          form.reset();
        } else {
          response.json().then(data => {
            responseMessage.textContent = "❌ " + (data.errors?.[0]?.message || "Form error.");
            responseMessage.style.color = "red";
          });
        }
      })
      .catch(error => {
        responseMessage.textContent = "❌ Network error. Please try again.";
        responseMessage.style.color = "red";
        console.error("Error:", error);
      });
    });