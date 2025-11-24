<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>Joshua Hirwa — Model & DJ Portfolio</title>
  <meta name="description" content="Professional portfolio for Model & DJ available for hire. Photos, mixes, services and booking contact.">
  <link rel="icon" type="image/jpg" href="joshua.jpg">
  <style>
    :root{--bg:#0f1724;--card:#0b1220;--accent:#ff4d6d;--muted:#9aa4b2;--glass:rgba(255,255,255,0.04)}
    *{box-sizing:border-box}
    body{margin:0;font-family:Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;color:#e6eef6;background:linear-gradient(180deg,#071020 0%, #091827 100%);-webkit-font-smoothing:antialiased}
    .container{max-width:1100px;margin:36px auto;padding:24px}
    header{display:flex;align-items:center;justify-content:space-between;gap:16px}
    .brand{display:flex;align-items:center;gap:12px}
    .avatar{width:64px;height:64px;border-radius:12px;object-fit:cover;border:2px solid rgba(255,255,255,0.06);background:linear-gradient(180deg,#111827,#0b1220)}
    h1{font-size:20px;margin:0}
    nav a{color:var(--muted);text-decoration:none;margin-left:16px}

    .hero{display:grid;grid-template-columns:1fr 420px;gap:28px;align-items:center;margin-top:28px}
    .hero-left{padding:28px;background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);border-radius:16px}
    .badge{display:inline-block;padding:6px 10px;border-radius:999px;background:var(--glass);color:var(--muted);font-size:13px}
    h2{margin:12px 0 6px;font-size:36px}
    p.lead{color:var(--muted);line-height:1.5}
    .cta{margin-top:18px;display:flex;gap:12px}
    .btn{padding:12px 16px;border-radius:10px;border:0;cursor:pointer}
    .btn-primary{background:linear-gradient(90deg,var(--accent),#ff7b88);color:white}
    .btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.06);color:var(--muted)}

    .hero-right{background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent); padding:18px;border-radius:16px;display:flex;flex-direction:column;align-items:center}
    .big-photo{width:100%;height:380px;border-radius:12px;object-fit:cover;display:block;background:#0b1220}
    .mini-gallery{display:flex;gap:8px;margin-top:12px}
    .mini-gallery img{width:80px;height:60px;object-fit:cover;border-radius:8px}

    section{margin-top:28px}
    .grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .card{background:var(--card);padding:16px;border-radius:12px}
    .muted{color:var(--muted)}

    .services{display:flex;gap:12px}
    .service{flex:1;padding:16px;border-radius:10px;background:rgba(255,255,255,0.02)}

    .gallery{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
    .gallery img{width:100%;height:220px;object-fit:cover;border-radius:8px;cursor:pointer}

    .dj-mixes audio{width:100%}

    .contact{display:flex;gap:18px}
    .contact form{flex:1;background:var(--card);padding:16px;border-radius:10px}
    .contact .info{width:320px;padding:16px;border-radius:10px;background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent)}
    label{display:block;margin-top:10px;font-size:13px;color:var(--muted)}
    input,textarea,select{width:100%;padding:10px;margin-top:6px;border-radius:8px;border:1px solid rgba(255,255,255,0.04);background:transparent;color:inherit}

    footer{margin-top:36px;padding:18px;text-align:center;color:var(--muted)}

    /* responsive */
    @media(max-width:980px){.hero{grid-template-columns:1fr}.grid{grid-template-columns:repeat(2,1fr)}.gallery{grid-template-columns:repeat(2,1fr)}}
    @media(max-width:560px){.container{padding:16px}.grid{grid-template-columns:1fr}.gallery{grid-template-columns:1fr}.brand h1{font-size:16px}}
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="brand">
        <img class="avatar" src="joshua.jpg" alt="avatar">
        <div>
          <h1>Joshua Hirwa</h1>
          <div class="muted">Model • DJ • Performer</div>
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
      <section class="hero">
        <div class="hero-left">
          <span class="badge">Available for hire</span>
          <h2>Versatile Model & Energetic DJ</h2>
          <p class="lead">I bring energy to the stage and style to the shoot. Based in Kigali — open to local and international bookings. I work with photographers, brands, event planners and venues.</p>
          <div class="cta">
            <button class="btn btn-primary" onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Book Me</button>
           
          </div>

          <div style="display:flex;gap:12px;margin-top:18px;align-items:center">
            <div>
              <div class="muted">Instagram</div>
              <div>@real14.rw</div>
            </div>
            <div>
              <div class="muted">Location</div>
              <div>Kigali, Rwanda</div>
            </div>
            <div>
              <div class="muted">Genres</div>
              <div>Amapiano · Afrobeat · House · EDM</div>
            </div>
          </div>
        </div>

        <aside class="hero-right">
          <img class="big-photo" src="joshua.jpg" alt="hero photo">
          <div class="mini-gallery">
            <img src="joshua 3 (1).jpg" alt="mini1">
            <img src="joshua 3 (2).jpg" alt="mini2">
            <img src="joshua 3 (3).jpg" alt="mini3">
          </div>
        </aside>
      </section>

      <section id="about">
        <div class="grid">
          <div class="card">
            <h3>About Me</h3>
            <p class="muted">Professional model and DJ with experience in fashion shoots, runway and live DJ sets. Dependable, punctual and easy to work with.</p>
            <ul>
              <li>Height: 1.85m (example)</li>
              <li>Languages: Kinyarwanda, English</li>
              <li>Available for travel</li>
            </ul>
          </div>

          <div class="card">
            <h3>Experience</h3>
            <p class="muted">Worked with local brands, clubs and event organizers across Kigali.</p>
            <ul>
              <li>Brand shoots & campaigns</li>
              <li>Club nights & private parties</li>
              <li>School & university events</li>
            </ul>
          </div>

          <div class="card">
            <h3>Highlights</h3>
            <p class="muted">Selected highlights: runway show feature, radio interview, and collaborations with photographers and producers.</p>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <h3>Modeling Portfolio</h3>
        <p class="muted">Click photos to enlarge. Replace the sample images with your best shots.</p>
        <div class="gallery" id="gallery">
          <img src="joshua 2 (4).jpg" alt="photo1" onclick="openLightbox(this.src)">
          <img src="joshua 2 (3).jpg" alt="photo2" onclick="openLightbox(this.src)">
          <img src="joshua 2 (2).jpg" alt="photo3" onclick="openLightbox(this.src)">
          <img src="joshua 2 (1).jpg" alt="photo4" onclick="openLightbox(this.src)">
        </div>
      </section>

      <section id="dj">
        <div style="display:flex;align-items:flex-start;gap:18px;margin-top:12px">
        <h3>DJ Sets & Mixes</h3>
        <p class="muted">Below are sample mixes. Replace with your SoundCloud/Mixcloud embeds or file links.</p>
        </div>
        <div class="card dj-mixes" style="margin-top:8px">
          <div class="muted">MORNING AFROBEATS BY REAL14</div>
          <audio controls>
            <source src="MORNING AFROBEATS BY REAL14.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
          </audio>
        </div>
      </section>

      <section id="services">
        <h3>Services</h3>
        <div class="services">
          <div class="service">
            <h4>Modeling</h4>
            <p class="muted">Fashion, commercial, editorial shoots, runway, product modeling.</p>
          </div>
          <div class="service">
            <h4>DJ</h4>
            <p class="muted">Club nights, private events, weddings, brand activations.</p>
          </div>
          <div class="service">
            <h4>Brand Collabs</h4>
            <p class="muted">Influencer promotions and product features.</p>
          </div>
        </div>
      </section>

      <section id="contact">
        <h3>Contact & Booking</h3>
        <div class="contact">
          <form onsubmit="handleSubmit(event)">
            <label for="name">Full name</label>
            <input id="name" required>
            <label for="email">Email</label>
            <input id="email" type="email" required>
            <label for="message">Message / Brief</label>
            <textarea id="message" rows="5" required></textarea>
            <label for="type">Service</label>
            <select id="type">
              <option>Modeling</option>
              <option>DJ</option>
              <option>Both</option>
            </select>
            <div style="margin-top:12px">
              <button type="submit" class="btn btn-primary">Send Booking Request</button>
            </div>
          </form>

          <div class="info">
            <h4>Direct contact</h4>
            <p class="muted">Whatsapp: <a href="https://wa.me/250790203047" target="_blank">+250 79 020 3047</a></p>
            <p class="muted">Email: <a href="mailto:joshuahirwa698@gmail.com">joshuahirwa698@gmail.com</a></p>
            <p class="muted">Instagram: <a href="https://instagram.com/real14.rw" target="_blank">@real14.rw</a></p>
            <p class="muted">snapchat: <a href="https://snapchat.com/add/real14rw" target="_blank">@real14rw</a></p>
            <p class="muted">Audiomack: <a href="https://audiomack.com/real14" target="_blank">@real14rw</a></p>
            <hr>
            <p class="muted">Tip: replace the WhatsApp link with your real number to accept bookings directly.</p>
          </div>
        </div>
      </section>

    </main>

    <footer>
      <div>© Joshua Hirwa — Model & DJ · Built by RICH NIGGAZ ASSOCIATION</div>
    </footer>
  </div>

  <!-- lightbox -->
  <div id="lightbox" style="position:fixed;inset:0;background:rgba(0,0,0,0.8);display:none;align-items:center;justify-content:center;padding:24px">
    <img id="lightbox-img" style="max-width:90%;max-height:90%;border-radius:8px;box-shadow:0 10px 40px rgba(0,0,0,0.6)">
  </div>

  <script>
    function openLightbox(src){
      const lb = document.getElementById('lightbox');
      const img = document.getElementById('lightbox-img');
      img.src = src; lb.style.display='flex';
      lb.onclick = ()=>{lb.style.display='none'; img.src=''}
    }

    function handleSubmit(e){
      e.preventDefault();
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      const type = document.getElementById('type').value;
      if(!name||!email||!message){alert('Please fill all fields');return}
      // Build mailto fallback for quick booking
      const subject = encodeURIComponent('Booking request: '+type+' — '+name);
      const body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\nType: '+type+'\n\nMessage:\n'+message);
      window.location.href = 'mailto:joshuahirwa698@gmail.com?subject='+subject+'&body='+body;
    }
  </script>
</body>
</html>
