const TTS = {
  audio: null,
  isSpeaking: false,
  queue: [],

  _key() { return localStorage.getItem('voicerss_key') || ''; },

  configure() {
    const key = prompt('Ingresa tu API Key de VoiceRSS (gratis en https://voicerss.org):', this._key());
    if (key !== null) {
      localStorage.setItem('voicerss_key', key);
      if (key) alert('API Key guardada. Ahora puedes escuchar el contenido.');
    }
  },

  speak(text) {
    this.cancel();
    if (!text) return;
    const key = this._key();
    if (!key) { this.configure(); return; }
    const maxChars = 500;
    const chunks = [];
    for (let i = 0; i < text.length; i += maxChars) {
      chunks.push(text.substring(i, i + maxChars));
    }
    this.queue = chunks;
    this.isSpeaking = true;
    this.updateUI();
    this._playNext();
  },

  _playNext() {
    if (!this.queue.length) { this.isSpeaking = false; this.updateUI(); return; }
    const chunk = this.queue.shift();
    const params = new URLSearchParams({
      key: this._key(),
      hl: 'es-es',
      src: chunk,
      f: 'mp3',
      c: 'MP3',
      v: 'Maria',
      r: '0'
    });
    this.audio = new Audio('https://api.voicerss.org/?' + params);
    this.audio.onended = () => { this.audio = null; this._playNext(); };
    this.audio.onerror = () => { this.audio = null; this._playNext(); };
    this.audio.play().catch(() => this._playNext());
  },

  cancel() {
    if (this.audio) { this.audio.pause(); this.audio = null; }
    this.queue = [];
    this.isSpeaking = false;
    this.updateUI();
  },

  toggle(text) {
    if (this.isSpeaking) this.cancel();
    else this.speak(text);
  },

  updateUI() {
    document.querySelectorAll('.tts-btn, .tts-btn-sm').forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) icon.className = this.isSpeaking ? 'fa-solid fa-circle-pause' : 'fa-solid fa-volume-high';
      btn.title = this.isSpeaking ? 'Pausar' : 'Escuchar contenido';
    });
  },

  getPageText() {
    const main = document.querySelector('.content-area') || document.querySelector('main');
    if (!main) return '';
    const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, null, false);
    const parts = [];
    while (walker.nextNode()) {
      const t = walker.currentNode.textContent.trim();
      if (t) parts.push(t);
    }
    return parts.join(' ');
  }
};
