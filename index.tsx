
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/**
 * برای جلوگیری از خطای "message channel closed" و تداخل با افزونه‌های مرورگر،
 * عملیات رندرینگ را تا زمان آماده‌سازی کامل DOM به تعویق می‌اندازیم.
 */
const mountApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Root element not found");
    return;
  }

  const root = ReactDOM.createRoot(rootElement);
  
  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Critical rendering error:", error);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}

/**
 * مدیریت خطاهای غیرمنتظره برای جلوگیری از قطع شدن ارتباط با پلتفرم میزبان
 */
window.addEventListener('unhandledrejection', (event) => {
  // این کار مانع از مسدود شدن Message Channel توسط خطاهای هندل نشده می‌شود
  console.warn('Unhandled promise rejection:', event.reason);
});
