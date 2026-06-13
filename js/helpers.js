// helpers.js ගොනුවේ මුලින්ම මෙය තිබිය යුතුයි
window.canvas = null; 

function initCanvas() {
    window.canvas = new fabric.Canvas('c'); // 'c' යනු ඔබේ HTML හි ඇති canvas ID එකයි
    console.log("Canvas initialized successfully!");
}

function getCanvas() {
    if (!window.canvas) {
        console.error("Canvas not initialized!");
        return null;
    }
    return window.canvas;
}
