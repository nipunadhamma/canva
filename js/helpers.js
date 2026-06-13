// helpers.js
window.canvas = null; // ගෝලීය වශයෙන් canvas එක තබා ගන්න

function initCanvas() {
    window.canvas = new fabric.Canvas('canvas', {
        width: 900,
        height: 500,
        backgroundColor: '#ffffff'
    });
    console.log("Canvas initialized successfully!");
}

function getCanvas() {
    if (!window.canvas) {
        console.error("Canvas not initialized!");
        return null;
    }
    return window.canvas;
}
