import React from 'react';

export default function Playground() {
  return (
    <iframe
      src="https://cdn.jsdelivr.net/npm/altair-static/build/index.html"
      style={{ width: '100vw', height: '100vh', border: 'none' }}
      title="Altair GraphQL Playground"
    />
  );
}
