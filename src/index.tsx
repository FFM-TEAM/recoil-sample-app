import App from '@/App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  <BrowserRouter>
    <RecoilRoot>
      <React.Suspense fallback={<div>Loading...</div>}>
        <App />
      </React.Suspense>
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById('root'),
);
