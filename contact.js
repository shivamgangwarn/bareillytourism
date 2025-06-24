document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from submitting normally

  // Simple client-side validation check
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Normally, here you would send the form data to a backend/server using fetch()

  // Simulate success
  alert("Thank you for contacting us! We'll get back to you soon.");
  document.getElementById("contactForm").reset();
});
