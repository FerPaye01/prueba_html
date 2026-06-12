/**
 * theme.js — Osinergmin Theme Controller
 * Debe cargarse en <head> SIN defer para evitar flash de tema incorrecto.
 * Persiste la selección en localStorage.
 */

(function () {
    var saved = localStorage.getItem('osin-theme');
    var preferred = saved ? saved : 'light';
    document.documentElement.setAttribute('data-theme', preferred);
})();

// ── Toggle público ──
function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('osin-theme', next);
    _updateIcon();
}

// ── Actualiza el ícono del botón ──
function _updateIcon() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    btn.innerHTML = isDark
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
    btn.title = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
}

// ── Sincroniza el ícono cuando el DOM esté listo ──
document.addEventListener('DOMContentLoaded', _updateIcon);
