const servicesContent = () => {
  return `<div class="service-item">
    <h2>Web Development</h2>
    <p>We offer professional web development services to build responsive and user-friendly websites.</p>
  </div>

  <div class="service-item">
    <h2>Mobile App Development</h2>
    <p>We specialize in developing mobile applications for both Android and iOS platforms.</p>
  </div>

  <div class="service-item">
    <h2>Digital Marketing</h2>
    <p>Our digital marketing services include SEO, social media marketing, and content marketing.</p>
  </div>
`;
};

function service() {
    appContent.innerHTML = servicesContent();
  }
