function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(section => section.classList.remove('active'));

  document.querySelector(`#${tabId}`).classList.add('active');
  event.target.classList.add('active');
}


function openBooking(service) {
  document.getElementById("bookingModal").style.display = "flex";
  document.getElementById("selectedService").innerText = service;
}

function closeBooking() {
  document.getElementById("bookingModal").style.display = "none";
}
