(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`https://github.com/aria-medical/aria-medical-caller-lookup/releases/latest`;document.querySelector(`#app`).innerHTML=`
  <div class="page-shell">
    <div class="ambient ambient-one" aria-hidden="true"></div>
    <div class="ambient ambient-two" aria-hidden="true"></div>

    <header class="topbar">
      <a class="brand" href="#top" aria-label="Aria Medical home">
        <span class="brand-mark">AM</span>
        <span class="brand-copy">
          <strong>Aria Medical</strong>
          <span>Caller Lookup</span>
        </span>
      </a>

      <nav class="top-actions" aria-label="Primary">
        <a class="text-link" href="/manual.html">Manual</a>
        <a class="primary-link" href="${e}" target="_blank" rel="noreferrer">
          Download app
        </a>
      </nav>
    </header>

    <main>
      <section class="hero-grid" id="top">
        <div class="hero-copy reveal">
          <p class="eyebrow">Launch-ready desktop access</p>
          <h1>Keep every care team contact one click away.</h1>
          <p class="lede">
            Download the latest Aria Medical Caller Lookup release and open the user
            manual from one focused launch page built for clinics, hospitals, and
            front-desk teams.
          </p>

          <div class="cta-row">
            <a class="button button-primary" href="${e}" target="_blank" rel="noreferrer">
              Download latest version
            </a>
            <a class="button button-secondary" href="/manual.html">
              Read the manual
            </a>
          </div>

          <ul class="hero-notes" aria-label="Highlights">
            <li>Fast access to the newest desktop build</li>
            <li>Step-by-step onboarding for staff and administrators</li>
            <li>Designed for dependable everyday lookup workflows</li>
          </ul>
        </div>

        <aside class="hero-panel reveal-delay" aria-label="Release overview">
          <div class="signal-card">
            <div class="signal-pill">
              <span class="signal-dot"></span>
              Latest release channel
            </div>

            <div class="signal-display">
              <p class="signal-label">Aria Medical Caller Lookup</p>
              <h2>Launch the desktop app with confidence.</h2>
              <p class="signal-copy">
                Open the newest published release, verify onboarding steps, and keep the
                manual within reach for every rollout.
              </p>
            </div>

            <div class="orbital-stack" aria-hidden="true">
              <span class="orbit orbit-large"></span>
              <span class="orbit orbit-medium"></span>
              <span class="orbit orbit-small"></span>
              <div class="center-node">
                <span>Ready</span>
                <strong>Now</strong>
              </div>
            </div>

            <dl class="meta-grid">
              <div>
                <dt>Primary action</dt>
                <dd>Download latest app</dd>
              </div>
              <div>
                <dt>Reference</dt>
                <dd>User manual</dd>
              </div>
              <div>
                <dt>Audience</dt>
                <dd>Clinic operations teams</dd>
              </div>
            </dl>
          </div>
        </aside>
      </section>

      <section class="info-grid" aria-label="Launch resources">
        <article class="info-card reveal">
          <p class="card-kicker">Latest release</p>
          <h3>Download the most recent production build.</h3>
          <p>
            Go directly to the latest GitHub release to install the newest version of the
            Aria Medical Caller Lookup desktop application.
          </p>
          <a class="inline-action" href="${e}" target="_blank" rel="noreferrer">
            Open release page
          </a>
        </article>

        <article class="info-card reveal-delay">
          <p class="card-kicker">User guide</p>
          <h3>Review setup, usage, and support guidance.</h3>
          <p>
            Read the hosted manual for installation steps, daily workflow guidance, and
            troubleshooting notes before deployment.
          </p>
          <a class="inline-action" href="/manual.html">Open manual</a>
        </article>
      </section>
    </main>
  </div>
`;