(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();document.querySelector("#app").innerHTML=`
  <div class="container">
    <header class="header">
      <h1>🎲 CubeFix</h1>
      <p class="subtitle">Your Rubik's Cube Solution Hub</p>
    </header>
    
    <main class="main">
      <div class="hero">
        <div class="cube-animation">
          <div class="cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face right"></div>
            <div class="face left"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
          </div>
        </div>
        
        <div class="content">
          <h2>Master the Cube</h2>
          <p>Learn algorithms, practice patterns, and solve your Rubik's cube faster than ever before.</p>
          
          <div class="features">
            <div class="feature">
              <div class="feature-icon">🧩</div>
              <h3>Step-by-Step Solutions</h3>
              <p>Interactive tutorials for beginners to advanced solvers</p>
            </div>
            
            <div class="feature">
              <div class="feature-icon">⚡</div>
              <h3>Speed Algorithms</h3>
              <p>Learn CFOP, Roux, and other speedcubing methods</p>
            </div>
            
            <div class="feature">
              <div class="feature-icon">📊</div>
              <h3>Progress Tracking</h3>
              <p>Monitor your solving times and improvement</p>
            </div>
          </div>
          
          <button class="cta-button">Start Learning</button>
        </div>
      </div>
    </main>
    
    <footer class="footer">
      <p>Built for cube enthusiasts • Deployed on GitHub Pages</p>
    </footer>
  </div>
`;document.querySelector(".cta-button").addEventListener("click",()=>{alert("Welcome to CubeFix! 🎲 Ready to start your cubing journey?")});const r=document.querySelector(".cube");let o=!1;r.addEventListener("mouseenter",()=>{o||(o=!0,r.style.transform="rotateX(-15deg) rotateY(45deg) rotateZ(15deg)")});r.addEventListener("mouseleave",()=>{o=!1,r.style.transform="rotateX(-15deg) rotateY(-15deg)"});
