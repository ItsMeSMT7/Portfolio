/* PRELOADER */
const preCounter = document.getElementById('preCounter');
let preCount = 0;
const preInt = setInterval(() => {
    preCount += Math.floor(Math.random() * 8) + 2;
    if (preCount >= 100) { preCount = 100; clearInterval(preInt); }
    if (preCounter) preCounter.textContent = preCount + '%';
}, 60);
window.addEventListener('load', () => {
    setTimeout(() => document.getElementById('preloader').classList.add('hidden'), 2200);
});

/* PARTICLES */
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null };

function resizeCanvas() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}
resizeCanvas();
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.r = Math.random() * 1.5 + 0.5;
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }
    draw(isDark) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(201,173,167,0.30)' : 'rgba(255,195,0,0.25)';
        ctx.fill();
    }
}

function initParticles() {
    particles = [];
    const c = innerWidth < 768 ? 30 : 65;
    for (let i = 0; i < c; i++) particles.push(new Particle());
}
initParticles();

function connectParticles(isDark) {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            const dx = particles[a].x - particles[b].x;
            const dy = particles[a].y - particles[b].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
                const op = (1 - dist / 120) * 0.12;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.strokeStyle = isDark
                    ? `rgba(201,173,167,${op})`
                    : `rgba(255,195,0,${op})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        }
        if (mouse.x) {
            const dx = particles[a].x - mouse.x;
            const dy = particles[a].y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                const op = (1 - dist / 150) * 0.25;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = isDark
                    ? `rgba(201,173,167,${op})`
                    : `rgba(74,78,105,${op})`;
                ctx.lineWidth = 0.6;
                ctx.stroke();
            }
        }
    }
}

function animateParticles() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw(isDark);
    });
    connectParticles(isDark);
    requestAnimationFrame(animateParticles);
}
animateParticles();

document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
document.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

/* CURSOR */
const cDot = document.getElementById('cursorDot');
const cRing = document.getElementById('cursorRing');

if (matchMedia('(pointer:fine)').matches) {
    let rx = 0, ry = 0, dx = 0, dy = 0;

    document.addEventListener('mousemove', e => {
        dx = e.clientX;
        dy = e.clientY;
        cDot.style.left = dx + 'px';
        cDot.style.top = dy + 'px';
    });

    function rf() {
        rx += (dx - rx) * 0.15;
        ry += (dy - ry) * 0.15;
        cRing.style.left = rx + 'px';
        cRing.style.top = ry + 'px';
        requestAnimationFrame(rf);
    }
    rf();

    document.querySelectorAll('a,button,.btn-glow,.btn-outline-glow,[data-tilt],input,textarea').forEach(el => {
        el.addEventListener('mouseenter', () => cRing.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cRing.classList.remove('hovering'));
    });
}

/* THEME */
const tBtn = document.getElementById('themeBtn');
const tIcon = document.getElementById('themeIcon');
const html = document.documentElement;

function getT() { return localStorage.getItem('theme') || 'dark'; }

function setT(t) {
    document.body.classList.add('theme-switch');
    html.setAttribute('data-theme', t);
    localStorage.setItem('theme', t);
    tIcon.className = t === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    setTimeout(() => document.body.classList.remove('theme-switch'), 600);
}
setT(getT());

tBtn.addEventListener('click', () => {
    setT(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    tBtn.style.transform = 'rotate(360deg) scale(1.15)';
    setTimeout(() => tBtn.style.transform = '', 400);
});

/* HEADER */
const header = document.getElementById('header');
const btt = document.getElementById('btt');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', scrollY > 50);
    btt.classList.toggle('visible', scrollY > 500);
});

btt.addEventListener('click', () => scrollTo({ top: 0, behavior: 'smooth' }));

/* MOBILE NAV */
const burger = document.getElementById('burger');
const navMenu = document.getElementById('navMenu');
const mobOv = document.getElementById('mobileOverlay');

function toggleMob() {
    burger.classList.toggle('active');
    navMenu.classList.toggle('active');
    mobOv.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

burger.addEventListener('click', toggleMob);
mobOv.addEventListener('click', toggleMob);

navMenu.querySelectorAll('.nav-link').forEach(l =>
    l.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) toggleMob();
    })
);

/* TYPEWRITER */
const typeEl = document.getElementById('typeText');
const phrases = ['Full Stack Developer', 'AI Engineer', 'REST API Architect', 'Founder of Asalkar Digital', 'Problem Solver'];
let pi = 0, ci = 0, del = false, spd = 80;

function tw() {
    const ph = phrases[pi];
    if (del) { typeEl.textContent = ph.substring(0, ci - 1); ci--; spd = 35; }
    else { typeEl.textContent = ph.substring(0, ci + 1); ci++; spd = 75; }
    if (!del && ci === ph.length) { spd = 2200; del = true; }
    else if (del && ci === 0) { del = false; pi = (pi + 1) % phrases.length; spd = 400; }
    setTimeout(tw, spd);
}
setTimeout(tw, 2500);

/* SCROLL REVEAL */
document.querySelectorAll('.reveal-up').forEach(el => {
    new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('active');
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }).observe(el);
});

/* SKILL BARS */
document.querySelectorAll('.sk-fill').forEach(el => {
    new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add('animated');
        });
    }, { threshold: 0.5 }).observe(el);
});

/* COUNTERS */
document.querySelectorAll('.hs-num').forEach(el => {
    let counted = false;
    new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting && !counted) {
                counted = true;
                const t = parseInt(e.target.dataset.target);
                let c = 0;
                const s = t / 60;
                const iv = setInterval(() => {
                    c += s;
                    if (c >= t) { c = t; clearInterval(iv); }
                    e.target.textContent = Math.floor(c);
                }, 30);
            }
        });
    }, { threshold: 0.5 }).observe(el);
});

/* NAV HIGHLIGHT */
document.querySelectorAll('section[id]').forEach(s => {
    new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                const id = e.target.id;
                document.querySelectorAll('.nav-link').forEach(l =>
                    l.classList.toggle('active', l.getAttribute('href') === '#' + id)
                );
            }
        });
    }, { threshold: 0.2, rootMargin: '-100px 0px 0px 0px' }).observe(s);
});

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
        e.preventDefault();
        const t = document.querySelector(this.getAttribute('href'));
        if (t) t.scrollIntoView({ behavior: 'smooth' });
    });
});

/* 3D TILT */
document.querySelectorAll('[data-tilt]').forEach(c => {
    c.addEventListener('mousemove', e => {
        const r = c.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const rotX = ((y - r.height / 2) / (r.height / 2)) * -5;
        const rotY = ((x - r.width / 2) / (r.width / 2)) * 5;
        c.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-4px)`;
    });
    c.addEventListener('mouseleave', () => {
        c.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

/* AVATAR PARALLAX */
const avWrap = document.getElementById('avatarWrap');
if (matchMedia('(pointer:fine)').matches && avWrap) {
    document.addEventListener('mousemove', e => {
        const cx = innerWidth / 2;
        const cy = innerHeight / 2;
        const dx = (e.clientX - cx) / cx;
        const dy = (e.clientY - cy) / cy;

        avWrap.querySelectorAll('.fl-icon').forEach((icon, i) => {
            const f = (i + 1) * 5;
            icon.style.transform = `translate(${dx * f}px, ${dy * f}px)`;
        });

        const avImg = document.getElementById('avFullImg');
        if (avImg) {
            avImg.style.transform = `translateX(calc(-50% + ${dx * 10}px)) translateY(${dy * 8}px)`;
        }
    });
}

/* ===================================================
   ABOUT PHOTO PARALLAX
   =================================================== */
const aboutPhotoWrap = document.getElementById('aboutPhotoWrap');
if (aboutPhotoWrap && window.matchMedia('(pointer:fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        const rect = aboutPhotoWrap.getBoundingClientRect();
        // Only apply when section is in viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const dx = (e.clientX - cx) / cx;
            const dy = (e.clientY - cy) / cy;

            // Move orbit dots
            aboutPhotoWrap.querySelectorAll('.ap-orbit-dot').forEach((dot, i) => {
                const f = (i + 1) * 4;
                dot.style.transform = `translate(${dx * f}px, ${dy * f}px)`;
            });

            // Slight photo shift
            const imgContainer = aboutPhotoWrap.querySelector('.ap-img-container');
            if (imgContainer) {
                imgContainer.style.transform =
                    `translate(calc(-50% + ${dx * 6}px), calc(-50% + ${dy * 6}px))`;
            }
        }
    });
}


/* ===================================================
   STACKING WORK CARDS
   =================================================== */
const stackCards = document.querySelectorAll('.work-stack-card');

if (stackCards.length) {
    function updateStackCards() {
        const viewH = window.innerHeight;

        stackCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();

            // Card enters viewport — fade in
            if (rect.top < viewH * 0.85) {
                card.classList.add('in-view');
            }

            // Check if this card is "behind" (next card has overlapped it)
            const nextCard = stackCards[index + 1];
            if (nextCard) {
                const nextRect = nextCard.getBoundingClientRect();
                const stickyTop = parseInt(getComputedStyle(card).top);
                if (nextRect.top <= stickyTop + 60) {
                    card.classList.add('behind');
                } else {
                    card.classList.remove('behind');
                }
            }
        });
    }

    window.addEventListener('scroll', updateStackCards, { passive: true });
    window.addEventListener('resize', updateStackCards);
    setTimeout(updateStackCards, 100);
}

/* ===================================================
   CONTACT AGENT IMAGE PARALLAX
   =================================================== */
/* ===================================================
   CONTACT AGENT — Parallax + Eye Tracking
   =================================================== */
const contactAgentWrap = document.getElementById('contactAgentWrap');
const contactAgentImg = document.getElementById('contactAgentImg');
const caPupilL = document.getElementById('caPupilL');
const caPupilR = document.getElementById('caPupilR');

if (contactAgentWrap && window.matchMedia('(pointer:fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        const wrapRect = contactAgentWrap.getBoundingClientRect();

        // Only apply when agent section is in viewport
        if (wrapRect.top < window.innerHeight && wrapRect.bottom > 0) {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const dx = (e.clientX - cx) / cx;
            const dy = (e.clientY - cy) / cy;

            // Slight image float (only when NOT hovered, hover has its own transform)
            if (!contactAgentWrap.matches(':hover') && contactAgentImg) {
                contactAgentImg.style.transform =
                    `translateY(${-10 + dy * 5}px) translateX(${dx * 6}px)`;
            }

            // Eye tracking — pupils follow cursor
            // if (caPupilL && caPupilR) {
            //     // Calculate relative position to each eye
            //     const eyeMaxMove = 2.5; // pixels pupil can move

            //     // Get eye positions relative to viewport
            //     const eyeL = caPupilL.parentElement.getBoundingClientRect();
            //     const eyeR = caPupilR.parentElement.getBoundingClientRect();

            //     // Left eye
            //     const lCx = eyeL.left + eyeL.width / 2;
            //     const lCy = eyeL.top + eyeL.height / 2;
            //     const lAngle = Math.atan2(e.clientY - lCy, e.clientX - lCx);
            //     const lDist = Math.min(
            //         Math.sqrt(Math.pow(e.clientX - lCx, 2) + Math.pow(e.clientY - lCy, 2)),
            //         200
            //     );
            //     const lMove = (lDist / 200) * eyeMaxMove;
            //     caPupilL.style.transform =
            //         `translate(calc(-50% + ${Math.cos(lAngle) * lMove}px), calc(-50% + ${Math.sin(lAngle) * lMove}px))`;

            //     // Right eye
            //     const rCx = eyeR.left + eyeR.width / 2;
            //     const rCy = eyeR.top + eyeR.height / 2;
            //     const rAngle = Math.atan2(e.clientY - rCy, e.clientX - rCx);
            //     const rDist = Math.min(
            //         Math.sqrt(Math.pow(e.clientX - rCx, 2) + Math.pow(e.clientY - rCy, 2)),
            //         200
            //     );
            //     const rMove = (rDist / 200) * eyeMaxMove;
            //     caPupilR.style.transform =
            //         `translate(calc(-50% + ${Math.cos(rAngle) * rMove}px), calc(-50% + ${Math.sin(rAngle) * rMove}px))`;
            // }
        }
    });

    // Blink animation on hover
    if (contactAgentWrap) {
        contactAgentWrap.addEventListener('mouseenter', () => {
            // Trigger a blink
            if (caPupilL && caPupilR) {
                const eyeL = caPupilL.parentElement;
                const eyeR = caPupilR.parentElement;

                eyeL.style.transform = 'scaleY(0.1)';
                eyeR.style.transform = 'scaleY(0.1)';

                setTimeout(() => {
                    eyeL.style.transform = 'scaleY(1)';
                    eyeR.style.transform = 'scaleY(1)';
                }, 150);

                // Second blink after a beat
                setTimeout(() => {
                    eyeL.style.transform = 'scaleY(0.1)';
                    eyeR.style.transform = 'scaleY(0.1)';
                    setTimeout(() => {
                        eyeL.style.transform = 'scaleY(1)';
                        eyeR.style.transform = 'scaleY(1)';
                    }, 120);
                }, 400);
            }
        });

        // Periodic blink when visible
        let blinkInterval = null;

        const blinkObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    blinkInterval = setInterval(() => {
                        if (caPupilL && caPupilR) {
                            const eyeL = caPupilL.parentElement;
                            const eyeR = caPupilR.parentElement;

                            eyeL.style.transition = 'transform 0.1s';
                            eyeR.style.transition = 'transform 0.1s';

                            eyeL.style.transform = 'scaleY(0.1)';
                            eyeR.style.transform = 'scaleY(0.1)';

                            setTimeout(() => {
                                eyeL.style.transform = 'scaleY(1)';
                                eyeR.style.transform = 'scaleY(1)';
                            }, 130);
                        }
                    }, 4000);
                } else {
                    if (blinkInterval) clearInterval(blinkInterval);
                }
            });
        }, { threshold: 0.3 });

        blinkObs.observe(contactAgentWrap);
    }
}

/* ===================================================
   EXPERIENCE TIMELINE — Scroll Fill
   =================================================== */
const expTimeline = document.getElementById('expTimeline');
const expLineFill = document.getElementById('expLineFill');
const expEntries = document.querySelectorAll('.exp-entry');

if (expTimeline && expLineFill) {
    function updateExp() {
        const tlRect = expTimeline.getBoundingClientRect();
        const tlTop = tlRect.top;
        const tlHeight = tlRect.height;
        const viewH = innerHeight;

        const scrollInto = viewH * 0.5 - tlTop;
        const fillPercent = Math.max(0, Math.min(100, (scrollInto / tlHeight) * 100));
        expLineFill.style.height = fillPercent + '%';

        expEntries.forEach(entry => {
            const eRect = entry.getBoundingClientRect();
            const eCenter = eRect.top + eRect.height / 2;
            if (eCenter < viewH * 0.75) {
                entry.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', updateExp, { passive: true });
    updateExp();
}

/* CONTACT FORM */
const cForm = document.getElementById('contactForm');
const fOk = document.getElementById('formOk');

if (cForm) {
    cForm.addEventListener('submit', e => {
        e.preventDefault();
        const b = cForm.querySelector('button[type="submit"]');
        const o = b.innerHTML;
        b.innerHTML = '<span class="btn-glow-inner"><i class="fas fa-spinner fa-spin"></i> Sending...</span>';
        b.disabled = true;
        setTimeout(() => {
            b.innerHTML = o;
            b.disabled = false;
            fOk.classList.add('show');
            cForm.reset();
            setTimeout(() => fOk.classList.remove('show'), 5000);
        }, 1500);
    });
}