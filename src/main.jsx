import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'normalize.css';
import './style.css';
import { App } from './App';

const start = () => {
  const element = 'root';

  const rootElementId = document.getElementById(element);

  if (!rootElementId) {
    console.error(`❌ Failed to find #${element} element ❌`);
    document.body.textContent = `❌ Failed to find #${element} element ❌`;
    return;
  }

  createRoot(rootElementId).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
};

if (window.self !== window.top && window.top) {
  window.top.location = window.location.href;
}

start();
