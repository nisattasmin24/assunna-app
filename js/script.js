document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;

    // Simple validation (ensure all fields are filled out)
    if (name === '' || email === '' || amount === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Hide the form and show the thank you message
    document.getElementById('donationForm').style.display = 'none';
    document.getElementById('thankYouMessage').classList.remove('hidden');
    document.getElementById('donationAmount').textContent = amount;
});
