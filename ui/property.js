// core/canvas.js
export const canvas = document.createElement('canvas');
export const ctx = canvas.getContext('2d'); // මෙතැනදී ctx export කරන්න
// ... ඉතිරි කෝඩ් ...


// ui/property.js
// ui/property.js

export function initPropertyPanel() {
    const panel = document.getElementById('panel');
    
    panel.innerHTML += `
        <div class="property-settings" style="margin-top: 20px; border-top: 1px solid #444; padding-top: 10px;">
            <button id="clearBtn" style="width: 100%; padding: 8px; cursor: pointer;">කැන්වස් එක පිරිසිදු කරන්න</button>
            <br><br>
            <label>වර්ණය:</label>
            <input type="color" id="colorPicker" value="#000000">
            <br><br>
            <label>ප්‍රමාණය:</label>
            <input type="range" id="sizeSlider" min="1" max="50" value="5">
        </div>
    `;
}
