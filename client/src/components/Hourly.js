// Hourly.js
import React from 'react';
import Card from './Hcomponent/Card';
import  ReactDOM  from "react-dom/client";
import App from './Hcomponent/App';

   

    const Hourly = () => {
        const el = document.getElementById('root');
        const root = ReactDOM.createRoot(el);
        root.render(<App />);
  return (
    <div>
        <h1> Weather Forecast</h1>
    </div>
  );
    
};


export default Hourly;

