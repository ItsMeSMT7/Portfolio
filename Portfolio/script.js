/* PRELOADER */
const preCounter=document.getElementById('preCounter');
let preCount=0;
const preInt=setInterval(()=>{preCount+=Math.floor(Math.random()*8)+2;if(preCount>=100){preCount=100;clearInterval(preInt)}if(preCounter)preCounter.textContent=preCount+'%'},60);
window.addEventListener('load',()=>{setTimeout(()=>document.getElementById('preloader').classList.add('hidden'),2200)});

/* PARTICLES */
const canvas=document.getElementById('particleCanvas'),ctx=canvas.getContext('2d');let particles=[],mouse={x:null,y:null};
function resizeCanvas(){canvas.width=innerWidth;canvas.height=innerHeight}resizeCanvas();
window.addEventListener('resize',()=>{resizeCanvas();initParticles()});
class Particle{constructor(){this.x=Math.random()*canvas.width;this.y=Math.random()*canvas.height;this.vx=(Math.random()-.5)*.4;this.vy=(Math.random()-.5)*.4;this.r=Math.random()*1.5+.5}update(){this.x+=this.vx;this.y+=this.vy;if(this.x<0||this.x>canvas.width)this.vx*=-1;if(this.y<0||this.y>canvas.height)this.vy*=-1}draw(isDarkMode){ctx.beginPath();ctx.arc(this.x,this.y,this.r,0,Math.PI*2);ctx.fillStyle=isDarkMode?'rgba(100,255,218,.35)':'rgba(13,148,136,.25)';ctx.fill()}}
function initParticles(){particles=[];const c=innerWidth<768?30:65;for(let i=0;i<c;i++)particles.push(new Particle)}initParticles();
function connectParticles(isDarkMode){for(let a=0;a<particles.length;a++){for(let b=a+1;b<particles.length;b++){const dx=particles[a].x-particles[b].x,dy=particles[a].y-particles[b].y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<120){const op=(1-dist/120)*.12;ctx.beginPath();ctx.moveTo(particles[a].x,particles[a].y);ctx.lineTo(particles[b].x,particles[b].y);ctx.strokeStyle=isDarkMode?`rgba(100,255,218,${op})`:`rgba(13,148,136,${op})`;ctx.lineWidth=.5;ctx.stroke()}}if(mouse.x){const dx=particles[a].x-mouse.x,dy=particles[a].y-mouse.y,dist=Math.sqrt(dx*dx+dy*dy);if(dist<150){const op=(1-dist/150)*.25;ctx.beginPath();ctx.moveTo(particles[a].x,particles[a].y);ctx.lineTo(mouse.x,mouse.y);ctx.strokeStyle=isDarkMode?`rgba(100,255,218,${op})`:`rgba(13,148,136,${op})`;ctx.lineWidth=.6;ctx.stroke()}}}}
function animateParticles(){const isDarkMode=document.documentElement.getAttribute('data-theme')!=='light';ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{p.update();p.draw(isDarkMode)});connectParticles(isDarkMode);requestAnimationFrame(animateParticles)}animateParticles();
document.addEventListener('mousemove',e=>{mouse.x=e.clientX;mouse.y=e.clientY});
document.addEventListener('mouseleave',()=>{mouse.x=null;mouse.y=null});

/* CURSOR */
const cDot=document.getElementById('cursorDot'),cRing=document.getElementById('cursorRing');
if(matchMedia('(pointer:fine)').matches){let rx=0,ry=0,dx=0,dy=0;
document.addEventListener('mousemove',e=>{dx=e.clientX;dy=e.clientY;cDot.style.left=dx+'px';cDot.style.top=dy+'px'});
function rf(){rx+=(dx-rx)*.15;ry+=(dy-ry)*.15;cRing.style.left=rx+'px';cRing.style.top=ry+'px';requestAnimationFrame(rf)}rf();
document.querySelectorAll('a,button,.btn-glow,.btn-outline-glow,[data-tilt],input,textarea').forEach(el=>{el.addEventListener('mouseenter',()=>cRing.classList.add('hovering'));el.addEventListener('mouseleave',()=>cRing.classList.remove('hovering'))})}

/* THEME */
const tBtn=document.getElementById('themeBtn'),tIcon=document.getElementById('themeIcon'),html=document.documentElement;
function getT(){return localStorage.getItem('theme')||'dark'}
function setT(t){document.body.classList.add('theme-switch');html.setAttribute('data-theme',t);localStorage.setItem('theme',t);tIcon.className=t==='dark'?'fas fa-moon':'fas fa-sun';setTimeout(()=>document.body.classList.remove('theme-switch'),600)}
setT(getT());
tBtn.addEventListener('click',()=>{setT(html.getAttribute('data-theme')==='dark'?'light':'dark');tBtn.style.transform='rotate(360deg) scale(1.15)';setTimeout(()=>tBtn.style.transform='',400)});

/* HEADER */
const header=document.getElementById('header'),btt=document.getElementById('btt');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',scrollY>50);btt.classList.toggle('visible',scrollY>500)});
btt.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));

/* MOBILE NAV */
const burger=document.getElementById('burger'),navMenu=document.getElementById('navMenu'),mobOv=document.getElementById('mobileOverlay');
function toggleMob(){burger.classList.toggle('active');navMenu.classList.toggle('active');mobOv.classList.toggle('active');document.body.style.overflow=navMenu.classList.contains('active')?'hidden':''}
burger.addEventListener('click',toggleMob);mobOv.addEventListener('click',toggleMob);
navMenu.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',()=>{if(navMenu.classList.contains('active'))toggleMob()}));

/* TYPEWRITER */
const typeEl=document.getElementById('typeText');
const phrases=['Full Stack Developer','AI Engineer','REST API Architect','Founder of Asalkar Digital','Problem Solver'];
let pi=0,ci=0,del=false,spd=80;
function tw(){const ph=phrases[pi];if(del){typeEl.textContent=ph.substring(0,ci-1);ci--;spd=35}else{typeEl.textContent=ph.substring(0,ci+1);ci++;spd=75}
if(!del&&ci===ph.length){spd=2200;del=true}else if(del&&ci===0){del=false;pi=(pi+1)%phrases.length;spd=400}
setTimeout(tw,spd)}setTimeout(tw,2500);

/* SCROLL REVEAL */
document.querySelectorAll('.reveal-up').forEach(el=>{new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('active')}})},{threshold:.08,rootMargin:'0px 0px -40px 0px'}).observe(el)});

/* SKILL BARS */
document.querySelectorAll('.sk-fill').forEach(el=>{new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('animated')})},{threshold:.5}).observe(el)});

/* COUNTERS */
document.querySelectorAll('.hs-num').forEach(el=>{let counted=false;new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting&&!counted){counted=true;const t=parseInt(e.target.dataset.target);let c=0;const s=t/60;const iv=setInterval(()=>{c+=s;if(c>=t){c=t;clearInterval(iv)}e.target.textContent=Math.floor(c)},30)}})},{threshold:.5}).observe(el)});

/* NAV HIGHLIGHT */
document.querySelectorAll('section[id]').forEach(s=>{new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const id=e.target.id;document.querySelectorAll('.nav-link').forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+id))}})},{threshold:.2,rootMargin:'-100px 0px 0px 0px'}).observe(s)});

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',function(e){e.preventDefault();const t=document.querySelector(this.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth'})})});

/* 3D TILT */
document.querySelectorAll('[data-tilt]').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();const x=e.clientX-r.left,y=e.clientY-r.top;c.style.transform=`perspective(1000px) rotateX(${((y-r.height/2)/(r.height/2))*-5}deg) rotateY(${((x-r.width/2)/(r.width/2))*5}deg) translateY(-4px)`});c.addEventListener('mouseleave',()=>{c.style.transform='perspective(1000px) rotateX(0) rotateY(0) translateY(0)'})});

/* AVATAR PARALLAX */
const avWrap=document.getElementById('avatarWrap');
if(matchMedia('(pointer:fine)').matches&&avWrap){document.addEventListener('mousemove',e=>{const cx=innerWidth/2,cy=innerHeight/2,dx=(e.clientX-cx)/cx,dy=(e.clientY-cy)/cy;
avWrap.querySelectorAll('.fl-icon').forEach((icon,i)=>{const f=(i+1)*5;icon.style.transform=`translate(${dx*f}px,${dy*f}px)`});
const avImg=document.getElementById('avFullImg');if(avImg)avImg.style.transform=`translateX(calc(-50% + ${dx*10}px)) translateY(${dy*8}px)`})}

/* ===================================================
   HORIZONTAL SCROLL WORK SECTION
   =================================================== */
// const workSection=document.getElementById('work');
// const workTrack=document.getElementById('workTrack');
// const workFill=document.getElementById('workProgressFill');
// const workCurrentEl=document.getElementById('workCurrent');

// if(workSection&&workTrack){
//     const slides=workTrack.querySelectorAll('.work-slide');
//     const totalSlides=slides.length;
//     document.getElementById('workTotal').textContent=String(totalSlides).padStart(2,'0');

//     // Set section height = totalSlides * 100vh
//     workSection.style.height=totalSlides*100+'vh';

//     function updateWork(){
//         const rect=workSection.getBoundingClientRect();
//         const sectionH=workSection.offsetHeight;
//         const viewH=innerHeight;
//         const scrolled=-rect.top;
//         const maxScroll=sectionH-viewH;
//         let progress=Math.max(0,Math.min(1,scrolled/maxScroll));

//         const maxTranslate=(totalSlides-1)*innerWidth;
//         const translateX=progress*maxTranslate;

//         workTrack.style.transform=`translateX(-${translateX}px)`;
//         workFill.style.width=progress*100+'%';

//         const currentIdx=Math.min(Math.floor(progress*totalSlides),totalSlides-1);
//         workCurrentEl.textContent=String(currentIdx+1).padStart(2,'0');
//     }

//     window.addEventListener('scroll',updateWork,{passive:true});
//     window.addEventListener('resize',updateWork);
//     updateWork();
// }



/* ===================================================
   STACKING WORK CARDS
   =================================================== */
const stackCards = document.querySelectorAll('.work-stack-card');

if (stackCards.length) {
    function updateStackCards() {
        const viewH = window.innerHeight;

        stackCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const cardTop = rect.top;
            const cardBottom = rect.bottom;

            // Card enters viewport — fade in
            if (cardTop < viewH * 0.85) {
                card.classList.add('in-view');
            }

            // Check if this card is "behind" (next card has overlapped it)
            const nextCard = stackCards[index + 1];
            if (nextCard) {
                const nextRect = nextCard.getBoundingClientRect();
                // If next card's top is close to this card's sticky position
                // it means this card is being covered
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

    // Initial call
    setTimeout(updateStackCards, 100);
}

/* ===================================================
   CONTACT AGENT IMAGE PARALLAX
   =================================================== */
const agentImg = document.querySelector('.contact-agent-img');
if (agentImg && window.matchMedia('(pointer:fine)').matches) {
    document.addEventListener('mousemove', (e) => {
        const rect = agentImg.getBoundingClientRect();
        // Only apply when image is in viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const dx = (e.clientX - cx) / cx;
            const dy = (e.clientY - cy) / cy;
            agentImg.style.transform = `translateY(${-10 + dy * 5}px) translateX(${dx * 8}px)`;
        }
    });
}



/* ===================================================
   EXPERIENCE TIMELINE — Scroll Fill
   =================================================== */
const expTimeline=document.getElementById('expTimeline');
const expLineFill=document.getElementById('expLineFill');
const expEntries=document.querySelectorAll('.exp-entry');

if(expTimeline&&expLineFill){
    function updateExp(){
        const tlRect=expTimeline.getBoundingClientRect();
        const tlTop=tlRect.top;
        const tlHeight=tlRect.height;
        const viewH=innerHeight;

        // Calculate fill based on how far we've scrolled through the timeline
        const scrollInto=viewH*0.5-tlTop; // trigger at center of viewport
        const fillPercent=Math.max(0,Math.min(100,(scrollInto/tlHeight)*100));
        expLineFill.style.height=fillPercent+'%';

        // Reveal entries
        expEntries.forEach(entry=>{
            const eRect=entry.getBoundingClientRect();
            const eCenter=eRect.top+eRect.height/2;
            if(eCenter<viewH*0.75){
                entry.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll',updateExp,{passive:true});
    updateExp();
}

/* CONTACT FORM */
const cForm=document.getElementById('contactForm'),fOk=document.getElementById('formOk');
if(cForm){cForm.addEventListener('submit',e=>{e.preventDefault();const b=cForm.querySelector('button[type="submit"]');const o=b.innerHTML;b.innerHTML='<span class="btn-glow-inner"><i class="fas fa-spinner fa-spin"></i> Sending...</span>';b.disabled=true;setTimeout(()=>{b.innerHTML=o;b.disabled=false;fOk.classList.add('show');cForm.reset();setTimeout(()=>fOk.classList.remove('show'),5000)},1500)})}