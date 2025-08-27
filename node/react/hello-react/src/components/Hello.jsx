// src/Hello.jsx

import React from 'react'; // React library ကို import လုပ်ခြင်း

// Functional Component တစ်ခုကို ဖန်တီးခြင်း
function Hello() {
    const name = "React User"; // နာမည်တစ်ခု သတ်မှတ်ခြင်း

    return ( // Component က return လုပ်မယ့် JSX (UI)
        <div>
            <h1>Hello, {name}!</h1> {/* JSX ထဲမှာ JavaScript variable ကို သုံးခြင်း */}
            <p>This is a simple React component.</p>
            <p>Current time: {new Date().toLocaleTimeString()}</p> {/* လက်ရှိအချိန်ကို ပြသခြင်း */}
        </div>
    );
}

export default Hello; // ဒီ component ကို တခြားဖိုင်တွေကနေ ခေါ်သုံးနိုင်ဖို့ export လုပ်ခြင်း