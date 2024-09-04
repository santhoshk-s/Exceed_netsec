// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router } from 'react-router-dom';
// import ThemeProvider from './utils/ThemeContext';
// import App from './App';
// import "aos/dist/aos.css";
// import {Provider} from 'react-redux';
// import './index.css'
// import {store} from './store/store'; // replace with the path to your Redux store

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Router>
//       <ThemeProvider>
//         <Provider store={store}>
//           <App />
//         </Provider>
//       </ThemeProvider>
//     </Router>
//   </React.StrictMode>,
// );
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './utils/ThemeContext';
import App from './App';
import "aos/dist/aos.css";
import {Provider} from 'react-redux';
import './index.css'
import {store} from './store/store'; // replace with the path to your Redux store

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

