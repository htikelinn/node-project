import React from 'react';
import ReactDOM from 'react-dom/client'; // React DOM client library ကို import လုပ်ခြင်း
import App from './App.jsx'; // သင့်ရဲ့ root component ဖြစ်တဲ့ App.jsx ကို import လုပ်ခြင်း
// import './index.css'; // Global CSS styles တွေကို import လုပ်ခြင်း (Vite က ဖန်တီးပေးထားတဲ့ default CSS)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App /> {/* App Component ကို Render လုပ်ခြင်း */}
    </React.StrictMode>,
);