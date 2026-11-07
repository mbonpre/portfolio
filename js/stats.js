(function () {
  var el = document.getElementById("members-count");
  if (!el) return;

  var API = "https://club-anglais-backend.onrender.com/public/stats";
  var KEY = "members-count";

  function show(n) { el.textContent = String(n); }

  // Dernier chiffre connu, affiché tout de suite lors des visites suivantes
  try {
    var cached = parseInt(localStorage.getItem(KEY), 10);
    if (cached > 0) show(cached);
  } catch (e) {}

  // Le backend gratuit peut mettre ~30 s à se réveiller : on attend jusqu'à 60 s.
  // Pendant ce temps, la valeur d'origine ("85+") reste affichée.
  var ctrl = new AbortController();
  var timer = setTimeout(function () { ctrl.abort(); }, 60000);

  fetch(API, { signal: ctrl.signal })
    .then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    })
    .then(function (d) {
      var n = d && d.members;
      if (Number.isInteger(n) && n >= 0) {
        show(n);
        try { localStorage.setItem(KEY, String(n)); } catch (e) {}
      }
    })
    .catch(function () { /* on garde la valeur affichée */ })
    .then(function () { clearTimeout(timer); });
})();
