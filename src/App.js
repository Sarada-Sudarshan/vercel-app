import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: 'Outreach Landing',
        page_location: window.location.href,
        page_path: '/',
      });
    }
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Thank you for visiting!</h1>
      <p>This helps us track engagement for our outreach efforts.</p>
    </div>
  );
}

export default App;

