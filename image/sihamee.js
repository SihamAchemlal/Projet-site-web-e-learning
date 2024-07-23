const form = document.getElementById('registrationForm');
const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const lastName = document.getElementById('lastName').value;
  const address = document.getElementById('address').value;
  const phoneNumber = document.getElementById('phoneNumber').value;
  const dateOfBirth = document.getElementById('dateOfBirth').value;
  window.location.href = "registration-summary.html" + "?name=" + name + "&email=" + email + "&lastName=" + lastName + "&address=" + address + "&phoneNumber=" + phoneNumber + "&dateOfBirth=" + dateOfBirth;
});