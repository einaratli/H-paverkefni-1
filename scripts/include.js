document.addEventListener('DOMContentLoaded', async () => {
  const slots = document.querySelectorAll('[data-include]');
  await Promise.all([...slots].map(async el => {
    const url = el.getAttribute('data-include');
    const res = await fetch(url, { cache: 'no-cache' });
    if (!res.ok) { el.innerHTML = `<!-- include failed: ${url} (${res.status}) -->`; return; }
    el.outerHTML = await res.text();
  }));

  // optional: highlight current page in nav
  const header = document.querySelector('.site-header');
  if (header) {
    const links = header.querySelectorAll('a[href]');
    const here = location.pathname.replace(/\/+$/, '') || '/';
    links.forEach(a => {
      const href = (a.getAttribute('href') || '').replace(/\/+$/, '') || '/';
      if (href === here) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }
});
