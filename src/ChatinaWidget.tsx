import { useEffect } from 'react';

const ChatinaWidget = () => {
  useEffect(() => {
    // Skip if already initialized
    if (window.chatina) return;

    // Create container if it doesn't exist
    if (!document.getElementById('chatina-root')) {
      const container = document.createElement('div');
      container.id = 'chatina-root';
      document.body.appendChild(container);
    }

    // Initialize Chatina
    window.chatina = { bId: "6834045e40b2a2baf1fa3e9f" };

    // Load CSS
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://cdn.chatina.ai/static/widget.css';
    css.crossOrigin = 'anonymous';
    document.head.appendChild(css);

    // Load JS with delay to avoid Vite conflicts
    setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://cdn.chatina.ai/static/widget.js';
      script.crossOrigin = 'anonymous';
      script.async = true;
      document.head.appendChild(script);
    }, 1000);

    return () => {
      // Cleanup
      const widget = document.getElementById('chatina-root');
      if (widget) document.body.removeChild(widget);
    };
  }, []);

  return null;
};

export default ChatinaWidget;