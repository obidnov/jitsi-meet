import React from 'react';
import { createRoot } from 'react-dom/client';

import AlwaysOnTop from './AlwaysOnTop';

// Render the main/root Component.
const root = createRoot(document.getElementById('react') || document.body);

root.render(<AlwaysOnTop />);

window.addEventListener(
    'beforeunload',
    () => root.unmount());
