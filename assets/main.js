document.documentElement.classList.add('js');

// mobiel menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav ul');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
  menu.addEventListener('click', e => {
    if (e.target.closest('a')) { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', false); }
  });
}

// header-rand bij scrollen
const header = document.querySelector('.site-header');
const onScroll = () => header && header.classList.toggle('scrolled', scrollY > 8);
addEventListener('scroll', onScroll, { passive: true });
onScroll();

// traplijnen tekenen
document.querySelectorAll('.trap path').forEach(p => p.classList.add('draw'));

// reveal bij in beeld komen
const io = 'IntersectionObserver' in window && new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
}, { rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach(el => io ? io.observe(el) : el.classList.add('in'));

// openingstijden: vandaag markeren
const dag = new Date().getDay(); // 0 = zondag
document.querySelectorAll('.uren tr[data-dag]').forEach(tr => {
  if (Number(tr.dataset.dag) === dag) tr.classList.add('vandaag');
});

// afspraakformulier: valideren en als e-mail klaarzetten
const form = document.querySelector('#afspraak-form');
if (form) {
  const regels = {
    naam: v => v.trim().length > 1,
    telefoon: v => /^(\+31|0)[\d\s-]{8,13}$/.test(v.trim()),
    email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  };
  const check = input => {
    const regel = regels[input.name];
    if (!regel) return true;
    const ok = regel(input.value);
    input.closest('.veld').classList.toggle('invalid', !ok);
    input.setAttribute('aria-invalid', !ok);
    return ok;
  };
  form.querySelectorAll('input').forEach(i => i.addEventListener('blur', () => i.value && check(i)));
  form.addEventListener('submit', e => {
    e.preventDefault();
    const velden = [...form.querySelectorAll('input[name]')].filter(i => regels[i.name]);
    const fouten = velden.filter(i => !check(i));
    if (fouten.length) { fouten[0].focus(); return; }
    const d = new FormData(form);
    const body = [
      `Naam: ${d.get('naam')}`,
      `Telefoon: ${d.get('telefoon')}`,
      `E-mail: ${d.get('email')}`,
      `Soort klacht: ${d.get('soort') || '-'}`,
      `Voorkeur: ${d.getAll('dagdeel').join(', ') || 'geen voorkeur'}`,
      '',
      d.get('bericht') || '',
    ].join('\n');
    location.href = `mailto:info@sportfysiotherapienoordwijk.nl?subject=${encodeURIComponent('Afspraakverzoek ' + d.get('naam'))}&body=${encodeURIComponent(body)}`;
    form.hidden = true;
    document.querySelector('.form-ok').classList.add('show');
  });
}
