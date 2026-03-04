# Integrating Axe-core into Healcode

Axe-core is an accessibility testing engine for websites and other HTML-based user interfaces. It is the agreed-upon tool for the backend of this application.

## Prerequisites

- A JavaScript codebase
- An npm package codebase

## General Steps (Axe-core Documentation)

### 1. Install the npm package

```bash
npm install axe-core --save-dev
```

### 2. Include the JavaScript file

Include the JavaScript file in each of your iframes in your fixtures or test systems:

```html
<script src="node_modules/axe-core/axe.min.js"></script>
```

### 3. Insert calls in your tests

Insert calls at each point in your tests where a new piece of UI becomes visible or exposed:

```javascript
.run()
  .then(results => {
    if (results.violations.length) {
      throw new Error('Accessibility issues found');
    }
  })
  .catch(err => {
    console.error('Something bad happened:', err.message);
  });
```

## Integrating into Healcode

### Option 1: Backend Integration

1. **Install the npm package**

```bash
npm install axe-core --save-dev
```

2. **Inject Axe-core in the backend**

```javascript
const axePath = require.resolve('axe-core/axe.min.js');
const axeSource = fs.readFileSync(axePath, 'utf8');
await page.evaluate(axeSource);

const results = await page.evaluate(async () => {
  return await axe.run();
});

res.json(results);
```

### Option 2: React Integration

1. **Install the axe-core React package**

```bash
npm install axe-core @axe-core/react
```

2. **Import into your index.js**

```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);
```

This will run Axe in the browser and log accessibility issues to the dev console as you interact with the app.
