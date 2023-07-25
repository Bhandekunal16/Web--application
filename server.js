const data = {
  to: "recipient@example.com",
  subject: "Test Email",
  text: "This is a test email sent from the static email API.",
};

fetch("http://localhost:3000/send-email", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
