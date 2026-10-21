import './style.css';

/* ─────────────────────────────────────────────
   E-MODUL DATA
   ───────────────────────────────────────────── */

const MENU_ITEMS = [
  {
    id: 'beranda',
    number: '01',
    icon: '🏠',
    iconClass: 'btn-icon-1',
    title: 'Beranda',
    url: 'https://read.bookcreator.com/1vfFuGvvNbf6dY51XbqRgJty0Nh2/o3CHlXb9QjK1RQ6jYEHDLg/fWmI63H-S-KwXHaiv4OfZQ',
  },
  {
    id: 'petunjuk',
    number: '02',
    icon: '📋',
    iconClass: 'btn-icon-2',
    title: 'Petunjuk Penggunaan E-Modul',
    url: 'https://read.bookcreator.com/1vfFuGvvNbf6dY51XbqRgJty0Nh2/o3CHlXb9QjK1RQ6jYEHDLg/SZRj36y_QTW8kAkCGNQtjA',
  },
  {
    id: 'tujuan',
    number: '03',
    icon: '🎯',
    iconClass: 'btn-icon-3',
    title: 'Tujuan Pembelajaran & Peta Konsep',
    url: 'https://read.bookcreator.com/1vfFuGvvNbf6dY51XbqRgJty0Nh2/o3CHlXb9QjK1RQ6jYEHDLg/rYSX0kysQU6mPG_zQRBePw',
  },
  {
    id: 'kegiatan',
    number: '04',
    icon: '🔬',
    iconClass: 'btn-icon-4',
    title: 'Kegiatan Belajar Berbasis STEM',
    url: 'https://read.bookcreator.com/1vfFuGvvNbf6dY51XbqRgJty0Nh2/o3CHlXb9QjK1RQ6jYEHDLg/opA81XaMSJeomhOrr68Qqg-right',
  },
  {
    id: 'latihan',
    number: '05',
    icon: '✏️',
    iconClass: 'btn-icon-5',
    title: 'Latihan dan Evaluasi',
    url: 'https://read.bookcreator.com/1vfFuGvvNbf6dY51XbqRgJty0Nh2/o3CHlXb9QjK1RQ6jYEHDLg/vkP5QsmvQ3KSd70TX4O6Kw',
  },
];

/* ─────────────────────────────────────────────
   RENDER HOME PAGE
   ───────────────────────────────────────────── */

function renderHome() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="home-page">
      <!-- Ambient orbs -->
      <div class="bg-orb bg-orb-1"></div>
      <div class="bg-orb bg-orb-2"></div>

      <!-- University Header -->
      <div class="university-bar">
        <div class="uni-logo-circle">🎓</div>
        <div class="uni-info">
          <h3>Universitas Pancasakti Tegal</h3>
          <p>Fakultas Keguruan dan Ilmu Pendidikan</p>
        </div>
        <div class="uni-motto">
          <em>Berkarya<br/>Berilmu<br/>Berdaya</em>
        </div>
      </div>

      <!-- Cover Image -->
      <div class="cover-card" role="img" aria-label="Sampul E-Modul Matematika Program Linear">
        <img src="/cover.jpg" alt="Sampul E-Modul Matematika Program Linear oleh Ernawati Setianingsih" />
      </div>

      <!-- Title -->
      <div class="title-section">
        <h1>E-Modul <span>Matematika</span><br/>Program Linear</h1>
        <p class="subtitle">Konsep, Strategi, dan Penerapan dalam Kehidupan Nyata</p>
        <p class="author">Disusun oleh: Ernawati Setianingsih</p>
      </div>

      <div class="divider"></div>

      <p class="nav-label">📚 &nbsp;Navigasi E-Modul</p>

      <!-- Navigation Buttons -->
      <nav class="nav-buttons" aria-label="Menu navigasi e-modul">
        ${MENU_ITEMS.map((item) => `
          <button
            id="btn-${item.id}"
            class="nav-btn"
            data-url="${item.url}"
            data-title="${item.title}"
            aria-label="Buka ${item.title}"
          >
            <div class="btn-icon ${item.iconClass}">${item.icon}</div>
            <div class="btn-content">
              <div class="btn-number">Menu ${item.number}</div>
              <div class="btn-title">${item.title}</div>
            </div>
            <div class="btn-arrow">›</div>
          </button>
        `).join('')}
      </nav>

      <footer class="home-footer">
        <p>© 2026 Universitas Pancasakti Tegal &nbsp;|&nbsp; E-Modul Matematika Program Linear by Ernawati Setianingsih</p>
      </footer>
    </div>
  `;

  // Attach button events
  document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const url = btn.dataset.url;
      const title = btn.dataset.title;
      renderReader(url, title);
    });
  });
}

/* ─────────────────────────────────────────────
   RENDER READER (iframe viewer)
   ───────────────────────────────────────────── */

function renderReader(url, title) {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="reader-page">
      <div class="reader-topbar">
        <button class="reader-back-btn" id="reader-back-btn" aria-label="Kembali ke beranda">
          ← Kembali
        </button>
        <div class="reader-title">
          ${title} <span>| E-Modul Matematika Program Linear</span>
        </div>
        <a
          href="${url}"
          target="_blank"
          rel="noopener noreferrer"
          class="reader-open-btn"
          aria-label="Buka di tab baru"
        >
          <span class="open-label">Buka Baru</span> ↗
        </a>
      </div>

      <div class="reader-iframe-wrapper">
        <div class="reader-loading" id="reader-loading">
          <div class="spinner"></div>
          <p>Memuat konten…</p>
        </div>
        <iframe
          id="content-iframe"
          src="${url}"
          title="${title}"
          allow="fullscreen"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  `;

  // Hide loader after iframe loads
  const iframe = document.getElementById('content-iframe');
  const loading = document.getElementById('reader-loading');

  iframe.addEventListener('load', () => {
    loading.classList.add('hidden');
  });

  // Fallback: hide loading after 8s in case iframe blocks load event
  setTimeout(() => loading.classList.add('hidden'), 8000);

  // Back button
  document.getElementById('reader-back-btn').addEventListener('click', () => {
    renderHome();
  });
}

/* ─────────────────────────────────────────────
   INIT
   ───────────────────────────────────────────── */

renderHome();
