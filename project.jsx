import React, { useState } from "react";
import "./App.css"; // Move your styles from <style> into App.css

export default function App() {
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const openLightbox = (src) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name").trim();
    const email = form.get("email").trim();
    const message = form.get("message").trim();
    const type = form.get("type");

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const subject = encodeURIComponent(`Booking request: ${type} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nType: ${type}\n\nMessage:\n${message}`
    );

    window.location.href =
      `mailto:joshuahirwa698@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="container">
      <header>
        <div className="brand">
          <img className="avatar" src="joshua.jpg" alt="avatar" />
          <div>
            <h1>Joshua Hirwa</h1>
            <div className="muted">Model • DJ • Performer</div>
          </div>
        </div>
        <nav>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#dj">DJ</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-left">
            <span className="badge">Available for hire</span>
            <h2>Versatile Model & Energetic DJ</h2>
            <p className="lead">
              I bring energy to the stage and style to the shoot. Based in Kigali —
              open to local and international bookings. I work with
              photographers, brands, event planners and venues.
            </p>
            <div className="cta">
              <button
                className="btn btn-primary"
                onClick={() =>
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Book Me
              </button>
            </div>

            <div className="stats-row">
              <div>
                <div className="muted">Instagram</div>
                <div>@real14.rw</div>
              </div>
              <div>
                <div className="muted">Location</div>
                <div>Kigali, Rwanda</div>
              </div>
              <div>
                <div className="muted">Genres</div>
                <div>Amapiano · Afrobeat · House · EDM</div>
              </div>
            </div>
          </div>

          <aside className="hero-right">
            <img className="big-photo" src="joshua.jpg" alt="hero" />
            <div className="mini-gallery">
              {[1, 2, 3].map((n) => (
                <img
                  key={n}
                  src={`joshua 3 (${n}).jpg`}
                  alt={`mini${n}`}
                />
              ))}
            </div>
          </aside>
        </section>

        <section id="about">
          <div className="grid">
            <div className="card">
              <h3>About Me</h3>
              <p className="muted">
                Professional model and DJ with experience in fashion shoots,
                runway and live DJ sets.
              </p>
              <ul>
                <li>Height: 1.85m (example)</li>
                <li>Languages: Kinyarwanda, English</li>
                <li>Available for travel</li>
              </ul>
            </div>

            <div className="card">
              <h3>Experience</h3>
              <p className="muted">
                Worked with local brands, clubs and event organizers across
                Kigali.
              </p>
              <ul>
                <li>Brand shoots & campaigns</li>
                <li>Club nights & private parties</li>
                <li>School & university events</li>
              </ul>
            </div>

            <div className="card">
              <h3>Highlights</h3>
              <p className="muted">
                Selected highlights: runway show feature, radio interview, and
                collaborations with photographers and producers.
              </p>
            </div>
          </div>
        </section>

        <section id="portfolio">
          <h3>Modeling Portfolio</h3>
          <p className="muted">Click photos to enlarge.</p>
          <div className="gallery">
            {[4, 3, 2, 1].map((n) => (
              <img
                key={n}
                src={`joshua 2 (${n}).jpg`}
                onClick={() => openLightbox(`joshua 2 (${n}).jpg`)}
                alt={`portfolio ${n}`}
              />
            ))}
          </div>
        </section>

        <section id="dj">
          <h3>DJ Sets & Mixes</h3>
          <p className="muted">
            Below are sample mixes. Replace with SoundCloud/Mixcloud embeds.
          </p>
          <div className="card dj-mixes">
            <div className="muted">MORNING AFROBEATS BY REAL14</div>
            <audio controls>
              <source
                src="MORNING AFROBEATS BY REAL14.mp3"
                type="audio/mpeg"
              />
            </audio>
          </div>
        </section>

        <section id="services">
          <h3>Services</h3>
          <div className="services">
            <div className="service">
              <h4>Modeling</h4>
              <p className="muted">Fashion, editorial, runway.</p>
            </div>
            <div className="service">
              <h4>DJ</h4>
              <p className="muted">Club nights, private events, weddings.</p>
            </div>
            <div className="service">
              <h4>Brand Collabs</h4>
              <p className="muted">Influencer promotions and features.</p>
            </div>
          </div>
        </section>

        <section id="contact">
          <h3>Contact & Booking</h3>
          <div className="contact">
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required />

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required />

              <label htmlFor="type">Service</label>
              <select id="type" name="type">
                <option>Modeling</option>
                <option>DJ</option>
                <option>Both</option>
              </select>

              <button type="submit" className="btn btn-primary">
                Send Booking Request
              </button>
            </form>

            <div className="info">
              <h4>Direct contact</h4>
              <p className="muted">
                Whatsapp: <a href="https://wa.me/250790203047">+250 79 020 3047</a>
              </p>
              <p className="muted">
                Email:<a href="mailto:joshuahirwa698@gmail.com">
                  joshuahirwa698@gmail.com
                </a>
              </p>
              <p className="muted">
                Instagram:<a href="https://instagram.com/real14.rw">
                  @real14.rw
                </a>
              </p>
              <p className="muted">
                Snapchat:<a href="https://snapchat.com/add/real14rw">
                  @real14rw
                </a>
              </p>
              <p className="muted">
                Audiomack:<a href="https://audiomack.com/real14">
                  @real14rw
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>© Joshua Hirwa — Model & DJ · Built by RICH NIGGAZ ASSOCIATION</div>
      </footer>

      {lightboxSrc && (
        <div className="lightbox" onClick={closeLightbox}>
          <img src={lightboxSrc} alt="lightbox" />
        </div>
      )}
    </div>
  );
}
