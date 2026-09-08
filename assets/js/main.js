(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  // EPISUIS applications: keep these external accesses next to Technical Notes
  // without duplicating the same navigation edit across every static page.
  if (nav) {
    const notesLink = Array.from(nav.querySelectorAll('a')).find(a => a.href.includes('/notas-tecnicas/'));

    if (notesLink) {
      let insertAfter = notesLink;

      if (!nav.querySelector('[data-vigilancia-link]')) {
        const vigilanciaLink = document.createElement('a');
        vigilanciaLink.href = 'https://vigilancia-episuis.pages.dev/';
        vigilanciaLink.target = '_blank';
        vigilanciaLink.rel = 'noopener';
        vigilanciaLink.dataset.vigilanciaLink = '';
        vigilanciaLink.textContent = document.documentElement.lang.startsWith('en') ? 'Surveillance ↗' : 'Vigilancia ↗';
        insertAfter.insertAdjacentElement('afterend', vigilanciaLink);
        insertAfter = vigilanciaLink;
      } else {
        insertAfter = nav.querySelector('[data-vigilancia-link]');
      }

      if (!nav.querySelector('[data-produccion-link]')) {
        const produccionLink = document.createElement('a');
        produccionLink.href = 'https://episuis-produccion.aljogaba.workers.dev/';
        produccionLink.target = '_blank';
        produccionLink.rel = 'noopener';
        produccionLink.dataset.produccionLink = '';
        produccionLink.textContent = document.documentElement.lang.startsWith('en') ? 'Production ↗' : 'Producción ↗';
        insertAfter.insertAdjacentElement('afterend', produccionLink);
      }
    }
  }

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 }) : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('is-visible'));

  // Contact form: by default opens the visitor's email client.
  // To connect Formspree or another static-form endpoint later, set data-endpoint on the form.
  document.querySelectorAll('[data-contact-form]').forEach(form => {
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const status = form.querySelector('.form-status');
      const endpoint = (form.dataset.endpoint || '').trim();
      const data = new FormData(form);

      if (endpoint) {
        status.textContent = form.dataset.sending || 'Enviando…';
        try {
          const response = await fetch(endpoint, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
          if (!response.ok) throw new Error('Request failed');
          form.reset();
          status.textContent = form.dataset.success || 'Mensaje enviado.';
          return;
        } catch (error) {
          status.textContent = form.dataset.error || 'No fue posible enviar el formulario. Puedes escribirnos por correo.';
          return;
        }
      }

      const lang = document.documentElement.lang.startsWith('en') ? 'en' : 'es';
      const subject = lang === 'en' ? 'EPISUIS — project inquiry' : 'EPISUIS — consulta de proyecto';
      const labels = lang === 'en'
        ? { name: 'Name', org: 'Organization', email: 'Email', scope: 'Project scope', problem: 'Problem / objective' }
        : { name: 'Nombre', org: 'Organización', email: 'Correo', scope: 'Ámbito del proyecto', problem: 'Problema / objetivo' };
      const body = [
        `${labels.name}: ${data.get('name') || ''}`,
        `${labels.org}: ${data.get('organization') || ''}`,
        `${labels.email}: ${data.get('email') || ''}`,
        `${labels.scope}: ${data.get('scope') || ''}`,
        '',
        `${labels.problem}:`,
        `${data.get('problem') || ''}`
      ].join('\n');
      window.location.href = `mailto:episuis@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.textContent = lang === 'en' ? 'Opening your email application…' : 'Abriendo tu aplicación de correo…';
    });
  });

  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
})();
