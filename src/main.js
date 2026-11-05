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
    url: 'https://read.bookcreator.com/1vfFuGvvNbf6dY51XbqRgJty0Nh2/o3CHlXb9QjK1RQ6jYEHDLg/xg9L1FAOSNO0BkWtFrBwaQ',
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
  {
    id: 'jobsheet-2',
    number: '06',
    icon: '📊',
    iconClass: 'btn-icon-6',
    title: 'Jobsheet 2',
    badge: 'Modul Baru',
    badgeClass: 'badge-new',
    url: 'https://read.bookcreator.com/1vfFuGvvNbf6dY51XbqRgJty0Nh2/o3CHlXb9QjK1RQ6jYEHDLg/B1HXiSYBSLWUFtfjz_jHiA-right',
    lembarKerjaUrl: 'https://docs.google.com/document/d/18cphdq-ko7HJ3qTWAbWaY2vqspdpoTDiT7-WiQrcmBM/edit?usp=sharing',
    lembarKerjaLabel: 'Lembar Kerja',
  },
  {
    id: 'jobsheet-3',
    number: '07',
    icon: '📑',
    iconClass: 'btn-icon-7',
    title: 'Jobsheet 3',
    badge: 'Segera Hadir',
    badgeClass: 'badge-soon',
    url: '',
    lembarKerjaUrl: '',
    lembarKerjaLabel: 'Lembar Kerja',
    isComingSoon: true,
  },
];

/* ─────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────── */

function getEmbedUrl(url) {
  if (!url) return '';
  // Convert Google Docs /edit link to /preview for clean, reliable iframe embedding
  if (url.includes('docs.google.com/document/d/')) {
    return url.replace(/\/edit(\?.*)?$/, '/preview');
  }
  return url;
}

/* ─────────────────────────────────────────────
   COMING SOON MODAL
   ───────────────────────────────────────────── */

function showComingSoonModal(title) {
  const existing = document.getElementById('modal-overlay');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'modal-overlay';
  modal.className = 'modal-overlay';
  modal.innerHTML = `
    <div class="modal-card">
      <div class="modal-badge">⏳ Segera Hadir</div>
      <h3 class="modal-title">${title}</h3>
      <p class="modal-desc">
        Materi pembelajaran untuk <strong>${title}</strong> saat ini sedang dipersiapkan dan tautan modul akan segera menyusul.
      </p>
      <button class="modal-btn" id="modal-close-btn">Tutup</button>
    </div>
  `;

  document.body.appendChild(modal);

  const closeModal = () => modal.remove();
  document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

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
            class="nav-btn ${item.isComingSoon ? 'nav-btn-soon' : ''}"
            data-id="${item.id}"
            aria-label="Buka ${item.title}"
          >
            <div class="btn-icon ${item.iconClass}">${item.icon}</div>
            <div class="btn-content">
              <div class="btn-header-row">
                <div class="btn-number">Menu ${item.number}</div>
                ${item.badge ? `<span class="btn-badge ${item.badgeClass}">${item.badge}</span>` : ''}
              </div>
              <div class="btn-title">${item.title}</div>
            </div>
            <div class="btn-arrow">${item.isComingSoon ? '⏳' : '›'}</div>
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
      const id = btn.dataset.id;
      const item = MENU_ITEMS.find((m) => m.id === id);
      if (!item) return;

      if (item.isComingSoon || !item.url) {
        showComingSoonModal(item.title);
        return;
      }

      renderReader(item);
    });
  });
}

/* ─────────────────────────────────────────────
   RENDER READER (iframe viewer)
   ───────────────────────────────────────────── */

function renderReader(item, initialTab = 'materi') {
  let activeTab = initialTab;
  const lkLabel = item.lembarKerjaLabel || 'Lembar Kerja';
  const currentDirectUrl = (activeTab === 'lembar-kerja' && item.lembarKerjaUrl) ? item.lembarKerjaUrl : item.url;
  const currentEmbedUrl = getEmbedUrl(currentDirectUrl);
  const currentTitle = (activeTab === 'lembar-kerja' && item.lembarKerjaUrl) ? `${item.title} (${lkLabel})` : item.title;

  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="reader-page">
      <div class="reader-topbar">
        <button class="reader-back-btn" id="reader-back-btn" aria-label="Kembali ke beranda">
          ← <span class="back-label">Kembali</span>
        </button>

        <div class="reader-title">
          <span id="reader-title-label">${currentTitle}</span>
          <span class="reader-subtitle">| E-Modul Matematika Program Linear</span>
        </div>

        ${item.lembarKerjaUrl ? `
          <div class="reader-nav-actions" role="group" aria-label="Pilihan tampilan jobsheet">
            <button
              class="reader-action-btn ${activeTab === 'materi' ? 'active' : ''}"
              id="tab-btn-materi"
              title="Buka Materi ${item.title}"
            >
              📖 <span class="tab-label">Materi</span>
            </button>
            <button
              class="reader-action-btn reader-action-highlight ${activeTab === 'lembar-kerja' ? 'active' : ''}"
              id="tab-btn-lk"
              title="Buka ${lkLabel} ${item.title}"
            >
              📝 <span class="tab-label">${lkLabel}</span>
            </button>
          </div>
        ` : ''}

        <a
          href="${currentDirectUrl}"
          target="_blank"
          rel="noopener noreferrer"
          class="reader-open-btn"
          id="reader-open-btn"
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
          src="${currentEmbedUrl}"
          title="${currentTitle}"
          allow="fullscreen"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  `;

  const iframe = document.getElementById('content-iframe');
  const loading = document.getElementById('reader-loading');
  const openBtn = document.getElementById('reader-open-btn');
  const titleLabel = document.getElementById('reader-title-label');
  const tabMateri = document.getElementById('tab-btn-materi');
  const tabLk = document.getElementById('tab-btn-lk');

  const onIframeLoad = () => {
    loading.classList.add('hidden');
  };
  iframe.addEventListener('load', onIframeLoad);

  // Fallback: hide loading after 8s
  let loadingTimeout = setTimeout(() => loading.classList.add('hidden'), 8000);

  const switchTab = (tab) => {
    if (activeTab === tab) return;
    activeTab = tab;
    clearTimeout(loadingTimeout);
    loading.classList.remove('hidden');

    if (activeTab === 'lembar-kerja') {
      tabMateri?.classList.remove('active');
      tabLk?.classList.add('active');
      iframe.src = getEmbedUrl(item.lembarKerjaUrl);
      openBtn.href = item.lembarKerjaUrl;
      titleLabel.textContent = `${item.title} (${lkLabel})`;
    } else {
      tabLk?.classList.remove('active');
      tabMateri?.classList.add('active');
      iframe.src = getEmbedUrl(item.url);
      openBtn.href = item.url;
      titleLabel.textContent = item.title;
    }

    loadingTimeout = setTimeout(() => loading.classList.add('hidden'), 8000);
  };

  tabMateri?.addEventListener('click', () => switchTab('materi'));
  tabLk?.addEventListener('click', () => switchTab('lembar-kerja'));

  // Back button
  document.getElementById('reader-back-btn').addEventListener('click', () => {
    renderHome();
  });
}

/* ─────────────────────────────────────────────
   INIT
   ───────────────────────────────────────────── */

renderHome();
