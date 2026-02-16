<?php
$name = "Hirwa Joshua";
$title1 = "Professional DJ";
$title2 = "Fashion Model";
$title3 = "Digital Influencer";
$email = "joshuahirwa698@gmail.com";
$phone = "+250 790203047";
$instagram = "#";
$twitter = "#";
$tiktok = "#";
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?php echo $name; ?> | Official</title>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<style>
html { scroll-behavior:smooth; }

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family:'Poppins', sans-serif;
}
.icon-circle{
    width:80px;
    height:80px;
    border-radius:50%;
    border:2px solid #D4AF37;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 auto 20px;
    font-size:30px;
    color:#D4AF37;
    transition:0.4s;
}

.service-box:hover .icon-circle{
    background:#D4AF37;
    color:black;
    box-shadow:0 0 20px #D4AF37;
}
body{
    background:#000;
    color:#fff;
}

/* ===== NAVBAR ===== */
nav{
    position:fixed;
    width:100%;
    top:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 8%;
    transition:0.4s;
    z-index:1000;
}

nav.scrolled{
    background:#111;
    box-shadow:0 0 20px rgba(212,175,55,0.4);
}

.logo{
    font-size:22px;
    font-weight:700;
    color:#D4AF37;
}

.nav-links{
    display:flex;
    list-style:none;
}

.nav-links li{
    margin-left:30px;
}

.nav-links a{
    text-decoration:none;
    color:white;
    display:flex;
    align-items:center;
    gap:8px;
    transition:0.3s;
}

.nav-links a:hover{
    color:#D4AF37;
}

.hamburger{
    display:none;
    font-size:24px;
    cursor:pointer;
    color:#D4AF37;
}

/* ===== HERO ===== */
.hero{
    height:100vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:0 8%;
    background:linear-gradient(135deg, #000 0%, #1a1a1a 100%);
    position:relative;
    overflow:hidden;
}

.hero::before{
    content:'';
    position:absolute;
    width:500px;
    height:500px;
    background:radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%);
    border-radius:50%;
    top:-100px;
    right:-100px;
    z-index:1;
}

.hero-content{
    flex:1;
    z-index:2;
}

.hero h1{
    font-size:60px;
    margin-bottom:20px;
    font-weight:800;
    letter-spacing:-1px;
}

.hero span{
    color:#D4AF37;
    display:block;
    font-size:28px;
    margin-top:10px;
}

.typing{
    margin-top:15px;
    font-size:22px;
    color:#D4AF37;
    height:30px;
    min-width:300px;
}

.btn{
    margin-top:30px;
    padding:14px 35px;
    border-radius:30px;
    text-decoration:none;
    font-weight:600;
    background:#D4AF37;
    color:black;
    transition:0.4s;
    display:inline-block;
}

.btn:hover{
    background:white;
    box-shadow:0 0 25px #D4AF37;
    transform:translateY(-3px);
}

.hero-image{
    flex:1;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    position:relative;
    z-index:2;
}

.hero-image img{
    width:100%;
    max-width:400px;
    height:auto;
    border-radius:20px;
    border:3px solid #D4AF37;
    box-shadow:0 0 40px rgba(212,175,55,0.4);
    object-fit:cover;
    animation:float 3s ease-in-out infinite;
}

@keyframes float{
    0%, 100%{transform:translateY(0px);}
    50%{transform:translateY(-20px);}
}

/* ===== SECTIONS ===== */
section{
    padding:100px 10%;
}

.section-title{
    text-align:center;
    font-size:36px;
    margin-bottom:60px;
    color:#D4AF37;
}

.gallery{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
    margin-bottom:50px;
}

.gallery-item{
    position:relative;
    border-radius:15px;
    overflow:hidden;
    cursor:pointer;
    box-shadow:0 10px 30px rgba(212,175,55,0.2);
    transition:0.4s;
    border:2px solid #D4AF37;
    aspect-ratio:1;
}

.gallery img{
    width:100%;
    height:100%;
    object-fit:cover;
    filter:brightness(0.9);
    transition:0.5s;
}

.gallery-item:hover img{
    transform:scale(1.15);
    filter:brightness(1);
}

.gallery-overlay{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:linear-gradient(135deg, rgba(212,175,55,0.3), rgba(212,175,55,0.1));
    display:flex;
    justify-content:center;
    align-items:center;
    opacity:0;
    transition:0.4s;
    z-index:10;
}

.gallery-item:hover .gallery-overlay{
    opacity:1;
}

.gallery-overlay i{
    font-size:40px;
    color:white;
    text-shadow:0 0 20px #D4AF37;
}

.services{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:30px;
}

.service-box{
    background:linear-gradient(135deg, #111 0%, #1a1a1a 100%);
    padding:40px;
    width:300px;
    border-radius:15px;
    text-align:center;
    border:2px solid #D4AF37;
    transition:0.4s;
    box-shadow:0 5px 20px rgba(0,0,0,0.5);
}

.service-box i{
    font-size:50px;
    color:#D4AF37;
    margin-bottom:20px;
    transition:0.4s;
}

.service-box h3{
    font-size:22px;
    margin-bottom:10px;
    color:#D4AF37;
}

.service-box:hover{
    transform:translateY(-15px);
    box-shadow:0 15px 40px #D4AF37;
    background:linear-gradient(135deg, #1a1a1a 0%, #222 100%);
}

.service-box:hover i{
    transform:scale(1.2) rotate(10deg);
}

.contact{
    text-align:center;
}

footer{
    text-align:center;
    padding:20px;
    background:#111;
    margin-top:50px;
}

/* ===== MOBILE ===== */
@media(max-width:768px){
    .hero{
        flex-direction:column;
        padding:60px 8%;
        text-align:center;
        justify-content:center;
    }

    .hero h1{
        font-size:42px;
    }

    .hero-image{
        margin-top:40px;
        justify-content:center;
    }

    .hero-image img{
        max-width:300px;
    }

    .nav-links{
        position:absolute;
        top:80px;
        right:-100%;
        flex-direction:column;
        background:#111;
        width:250px;
        padding:20px;
        transition:0.4s;
    }

    .nav-links.active{
        right:0;
    }

    .nav-links li{
        margin:20px 0;
    }

    .hamburger{
        display:block;
    }

    .gallery{
        grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
        gap:15px;
    }

    .section-title{
        font-size:28px;
    }
}
/* ===== LIGHTBOX ===== */
.lightbox{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.95);
    display:flex;
    justify-content:center;
    align-items:center;
    opacity:0;
    pointer-events:none;
    transition:0.4s;
    z-index:2000;
}

.lightbox img{
    max-width:80%;
    max-height:80%;
    border:4px solid #D4AF37;
    border-radius:15px;
    box-shadow:0 0 40px #D4AF37;
    animation:zoomIn 0.4s ease;
}

.lightbox.active{
    opacity:1;
    pointer-events:auto;
}

@keyframes zoomIn{
    from{transform:scale(0.7);}
    to{transform:scale(1);}
}
.social-icons{
    margin-top:30px;
}

.social-icons a{
    margin:0 15px;
    font-size:28px;
    color:#D4AF37;
    transition:0.4s;
}

.social-icons a:hover{
    color:white;
    text-shadow:0 0 15px #D4AF37;
    transform:scale(1.2);
}
</style>
</head>
<body>

<nav id="navbar">
    <div class="logo"><?php echo $name; ?></div>

   <ul class="nav-links" id="navLinks">
    <li><a href="#about"><i class="fa-solid fa-user-tie"></i> About</a></li>
    <li><a href="#gallery"><i class="fa-solid fa-camera-retro"></i> Gallery</a></li>
    <li><a href="#services"><i class="fa-solid fa-star"></i> Services</a></li>
    <li><a href="#contact"><i class="fa-solid fa-envelope-open-text"></i> Contact</a></li>
</ul>
<div class="social-icons">
    <a href="https://www.instagram.com/real14.rw"><i class="fa-brands fa-instagram"></i></a>
    <a href="https://x.com/official14_rw"><i class="fa-brands fa-x-twitter"></i></a>
    <a href="#"><i class="fa-brands fa-tiktok"></i></a>
    <a href="#"><i class="fa-brands fa-youtube"></i></a>
</div>
    <div class="hamburger" onclick="toggleMenu()">
        <i class="fa fa-bars"></i>
    </div>
</nav>

<div class="hero">
    <div class="hero-content">
        <h1>I am <span><?php echo $name; ?></span></h1>
        <div class="typing" id="typing"></div>
        <a href="#contact" class="btn">Book Me Now</a>
    </div>
    <div class="hero-image">
        <img src="images/joshua (1).jpg" alt="<?php echo $name; ?>">
    </div>
</div>

<section id="about">
    <h2 class="section-title">About Me</h2>
    <p style="text-align:center; max-width:800px; margin:auto; line-height:1.8; font-size:16px;">
        I am Hirwa Joshua, Rwanda's premier entertainment professional and multi-talented personality. As an elite DJ, I craft unforgettable sonic experiences at the most prestigious venues. As a fashion model, I bring elegance and sophistication to every frame. And as Rwanda's top digital influencer, I connect with thousands of loyal followers, creating authentic brand partnerships and cultural moments. My passion for excellence drives every performance, every shot, and every collaboration.
    </p>
</section>

<section id="gallery">
    <h2 class="section-title">Gallery</h2>
    <div class="gallery">
        <div class="gallery-item" onclick="openLightbox('images/joshua (1).jpg')">
            <img src="images/joshua (1).jpg" alt="Portfolio 1">
            <div class="gallery-overlay">
                <i class="fa-solid fa-expand"></i>
            </div>
        </div>
        <div class="gallery-item" onclick="openLightbox('images/joshua (2).jpg')">
            <img src="images/joshua (2).jpg" alt="Portfolio 2">
            <div class="gallery-overlay">
                <i class="fa-solid fa-expand"></i>
            </div>
        </div>
        <div class="gallery-item" onclick="openLightbox('images/joshua (3).jpg')">
            <img src="images/joshua (3).jpg" alt="Portfolio 3">
            <div class="gallery-overlay">
                <i class="fa-solid fa-expand"></i>
            </div>
        </div>
        <div class="gallery-item" onclick="openLightbox('images/joshua (4).jpg')">
            <img src="images/joshua (4).jpg" alt="Portfolio 4">
            <div class="gallery-overlay">
                <i class="fa-solid fa-expand"></i>
            </div>
        </div>
        <div class="gallery-item" onclick="openLightbox('images/joshua (5).jpg')">
            <img src="images/joshua (5).jpg" alt="Portfolio 5">
            <div class="gallery-overlay">
                <i class="fa-solid fa-expand"></i>
            </div>
        </div>
        <div class="gallery-item" onclick="openLightbox('images/joshua (6).jpg')">
            <img src="images/joshua (6).jpg" alt="Portfolio 6">
            <div class="gallery-overlay">
                <i class="fa-solid fa-expand"></i>
            </div>
        </div>
    </div>
</section>

<section id="services">
    <h2 class="section-title">Services</h2>
    <div class="services">
        <div class="service-box">
            <i class="fa fa-headphones"></i>
            <h3>DJ Events</h3>
            <p>Professional DJ delivering high-energy performances at premium clubs, festivals, and weddings. Specializing in mixing the latest tracks and creating unforgettable musical experiences for any occasion with state-of-the-art equipment.</p>
        </div>

        <div class="service-box">
            <i class="fa-solid fa-camera-retro"></i>
            <h3>Fashion Model</h3>
            <p>Elite fashion model with striking presence and professional runway experience. Available for high-end photoshoots, fashion shows, brand campaigns, and exclusive modeling projects that showcase premium style and professionalism.</p>
        </div>
        <div class="service-box">
            <i class="fa fa-bullhorn"></i>
            <h3>Digital Influencer</h3>
            <p>Rwanda's Top Digital Star with massive social media following and authentic engagement. Offering premium brand collaborations, sponsored content creation, and strategic partnerships with leading brands across multiple platforms.</p>
        </div>
    </div>
</section>

<section id="contact">
    <h2 class="section-title">Contact</h2>
    <div class="contact">
        <p><i class="fa fa-envelope"></i> <?php echo $email; ?></p>
        <p><i class="fa fa-phone"></i> <?php echo $phone; ?></p>
    </div>
</section>

<footer>
© <?php echo date("Y"); ?> <?php echo $name; ?> | All Rights Reserved
</footer>

<script>
// Mobile Menu
function toggleMenu(){
    document.getElementById("navLinks").classList.toggle("active");
}

// Navbar Scroll Effect
window.addEventListener("scroll", function(){
    document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 50);
});

// Typing Effect
const texts = [
    "<?php echo $title1; ?>",
    "<?php echo $title2; ?>",
    "<?php echo $title3; ?>"
];

let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === texts.length){ count = 0; }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing').textContent = letter;

    if(letter.length === currentText.length){
        setTimeout(() => { index = 0; count++; }, 1000);
    }

    setTimeout(type, 100);
})();
// Lightbox
function openLightbox(src){
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").classList.add("active");
}

function closeLightbox(){
    document.getElementById("lightbox").classList.remove("active");
}
</script>
<!-- LIGHTBOX -->
<div class="lightbox" id="lightbox" onclick="closeLightbox()">
    <img id="lightbox-img">
</div>
</body>
</html>