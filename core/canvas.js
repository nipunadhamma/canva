



// core/canvas.js

export const canvas = document.createElement('canvas');
export const ctx = canvas.getContext('2d');

export function initCanvas() {
    const canvasContainer = document.getElementById('canvas');
    
    // කැන්වස් එකේ ප්‍රමාණය සකසමු
    canvas.width = 800;
    canvas.height = 600;
    
    // කැන්වස් එකේ මූලික පසුබිම
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // කැන්වස් එක HTML එකට එකතු කරමු
    canvasContainer.appendChild(canvas);
    
    console.log("Canvas සාර්ථකව පිහිටුවන ලදී.");
}

// කැන්වස් එකේ යම් දෙයක් ඇඳීමට අවශ්‍ය කාර්යයන් (උදාහරණයක්)
export function drawRectangle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

export function clearCanvas() {
    ctx.fillStyle = "#ffffff";  // නැවත සුදු පැහැය පුරවන්න
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


export function resizeCanvas(w, h, color) {
    canvas.width = w;
    canvas.height = h;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, w, h);
}