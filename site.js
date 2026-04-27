/* Shared site chrome (nav + footer) for Course du Portageur */

const CURRENT = (document.body.dataset.page || '').toLowerCase();

const NAV_HTML = `
<header class="site-header">
  <nav class="nav" id="siteNav">
    <a class="brand" href="index.html" aria-label="Course du Portageur — accueil">
      <img src="images/logo-portageur.png" alt="Course du Portageur" class="brand-logo"/>
    </a>
    <ul class="nav-links">
      <li><a class="nav-link ${CURRENT==='parcours'?'is-active':''}" href="parcours.html">Parcours</a></li>
      <li><a class="nav-link ${CURRENT==='courses'?'is-active':''}" href="courses.html">Info Course</a></li>
      <li>
        <a class="nav-link" href="#" onclick="return false">Résultats<span class="chev">▾</span></a>
        <ul class="submenu">
          <li><a href="https://sportstats.one/event/course-du-portageur/leaderboard/145284" target="_blank" rel="noopener">1 KM <span class="ext">↗</span></a></li>
          <li><a href="https://sportstats.one/event/course-du-portageur/leaderboard/145285" target="_blank" rel="noopener">3 KM <span class="ext">↗</span></a></li>
          <li><a href="https://sportstats.one/event/course-du-portageur/leaderboard/145286" target="_blank" rel="noopener">5 KM <span class="ext">↗</span></a></li>
          <li><a href="https://sportstats.one/event/course-du-portageur/leaderboard/145287" target="_blank" rel="noopener">10 KM <span class="ext">↗</span></a></li>
        </ul>
      </li>
      <li>
        <a class="nav-link" href="#" onclick="return false">Photos<span class="chev">▾</span></a>
        <ul class="submenu">
          <li><a href="https://gabiephotographie9.pixieset.com/courseduportageur/" target="_blank" rel="noopener">Courses 2025 <span class="ext">↗</span></a></li>
          <li><a href="https://www.flickr.com/photos/62067609@N02/albums/72177720322691581" target="_blank" rel="noopener">Courses 2024 <span class="ext">↗</span></a></li>
          <li><a href="https://www.flickr.com/photos/62067609@N02/albums/72177720312950513" target="_blank" rel="noopener">Courses 2023 <span class="ext">↗</span></a></li>
          <li><a href="https://www.retine.ca/Evenements/2022-Course-du-Portageur/" target="_blank" rel="noopener">Courses 2022 <span class="ext">↗</span></a></li>
        </ul>
      </li>
      <li><a class="nav-link ${CURRENT==='partenaires'?'is-active':''}" href="partenaires.html">Partenaires</a></li>
    </ul>
    <a class="nav-cta hide-mobile" href="https://events.hakuapp.com/course-du-portageur" target="_blank" rel="noopener">
      Inscription <span class="arrow">↗</span>
    </a>
    <button class="nav-toggle" aria-label="Menu" onclick="document.getElementById('mobileDrawer').classList.toggle('open'); this.classList.toggle('is-open')">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-drawer" id="mobileDrawer" style="display:none">
    <a href="index.html">Accueil</a>
    <a href="parcours.html">Parcours</a>
    <a href="courses.html">Info Course</a>
    <div class="sub-label">Résultats</div>
    <a href="https://sportstats.one/event/course-du-portageur/leaderboard/145284" target="_blank">1 KM ↗</a>
    <a href="https://sportstats.one/event/course-du-portageur/leaderboard/145285" target="_blank">3 KM ↗</a>
    <a href="https://sportstats.one/event/course-du-portageur/leaderboard/145286" target="_blank">5 KM ↗</a>
    <a href="https://sportstats.one/event/course-du-portageur/leaderboard/145287" target="_blank">10 KM ↗</a>
    <div class="sub-label">Photos</div>
    <a href="https://gabiephotographie9.pixieset.com/courseduportageur/" target="_blank">Courses 2025 ↗</a>
    <a href="https://www.flickr.com/photos/62067609@N02/albums/72177720322691581" target="_blank">Courses 2024 ↗</a>
    <a href="https://www.flickr.com/photos/62067609@N02/albums/72177720312950513" target="_blank">Courses 2023 ↗</a>
    <a href="https://www.retine.ca/Evenements/2022-Course-du-Portageur/" target="_blank">Courses 2022 ↗</a>
    <a href="partenaires.html">Partenaires</a>
    <a href="https://events.hakuapp.com/course-du-portageur" target="_blank" style="margin-top:16px; background: var(--ember); color: var(--birch); text-align:center; border-radius: 999px; padding: 14px; font-weight: 600;">Inscription ↗</a>
  </div>
</header>
`;

const FOOTER_HTML = `
<section class="cta-band dark" style="padding: 56px var(--gutter);">
  <div class="cta-band-inner" style="grid-template-columns: 1.4fr auto; gap: 32px;">
    <h2 style="font-size: clamp(28px, 4vw, 44px);">Participer autrement — <em>devenez bénévole</em></h2>
    <a href="mailto:courseduportageur@gmail.com" class="btn btn-primary">Devenir bénévole <span class="arrow">↗</span></a>
  </div>
</section>
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-top">
      <div>
        <img src="images/logo-portageur-light.png" alt="Course du Portageur" style="height: 64px; width: auto; margin-bottom: 20px;"/>
        <p class="footer-sub">L'évènement sportif et familial par excellence à Notre-Dame-du-Portage. Fleuve, couleurs d'automne, maisons anciennes — bonne course !</p>
      </div>
      <div class="footer-col">
        <h4>Départ</h4>
        <p>539, route du Fleuve<br/>Notre-Dame-du-Portage (Qc)<br/>G0L 1Y0</p>
      </div>
      <div class="footer-col">
        <h4>Contact</h4>
        <a href="mailto:courseduportageur@gmail.com">courseduportageur@gmail.com</a>
        <a href="https://www.facebook.com/Courseduportageur/" target="_blank" rel="noopener">Facebook ↗</a>
      </div>
      <div class="footer-col">
        <h4>Navigation</h4>
        <a href="parcours.html">Parcours</a>
        <a href="courses.html">Info Course</a>
        <a href="partenaires.html">Partenaires</a>
        <a href="https://events.hakuapp.com/course-du-portageur" target="_blank" rel="noopener">Inscription ↗</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>Tous droits réservés © ${new Date().getFullYear()} · Fabriqué à <a href="http://www.municipalite.notre-dame-du-portage.qc.ca/" target="_blank" rel="noopener">Notre-Dame-du-Portage</a></span>
      <span>24 · 10 · 2026</span>
    </div>
  </div>
</footer>
`;

// Inject
document.addEventListener('DOMContentLoaded', () => {
  const navMount = document.getElementById('nav-mount');
  const footMount = document.getElementById('footer-mount');
  if (navMount) navMount.innerHTML = NAV_HTML;
  if (footMount) footMount.innerHTML = FOOTER_HTML;

  // Mobile drawer toggle
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.getElementById('mobileDrawer');
  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const open = drawer.style.display === 'block';
      drawer.style.display = open ? 'none' : 'block';
    });
  }

  // Header scroll state — becomes opaque after scrolling past hero
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 80) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Countdown
  const cd = document.getElementById('countdown');
  if (cd) {
    const target = new Date('2026-10-24T11:00:00-04:00').getTime();
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      cd.innerHTML = `
        <div class="cd-unit"><div class="cd-num">${String(d).padStart(3,'0')}</div><div class="cd-label">Jours</div></div>
        <div class="cd-unit"><div class="cd-num">${String(h).padStart(2,'0')}</div><div class="cd-label">Heures</div></div>
        <div class="cd-unit"><div class="cd-num">${String(m).padStart(2,'0')}</div><div class="cd-label">Min</div></div>
        <div class="cd-unit"><div class="cd-num">${String(s).padStart(2,'0')}</div><div class="cd-label">Sec</div></div>
      `;
    };
    tick(); setInterval(tick, 1000);
  }
});
