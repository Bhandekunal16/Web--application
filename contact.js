const contactContent = () => {
  return `  <div class="contact-form">
  <form id="contact-form">
  <label for="to">To:</label>
  <input type="email" name="to" required>
  <br>
  <label for="subject">Subject:</label>
  <input type="text" name="subject" required>
  <br>
  <label for="text">Message:</label>
  <textarea name="text" rows="4" required></textarea>
  <br>
  <button type="submit" onClick="mail()">Send Email</button>
</form>
  </div>
  `;
};

function contact() {
  appContent.innerHTML = contactContent();
}


function mail(){
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      to: formData.get('to'),
      subject: formData.get('subject'),
      text: formData.get('text'),
    };

    fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        alert('Email sent successfully!');
      })
      .catch(error => {
        console.error(error);
        alert('Error sending email. Please try again later.');
      });
  });
}