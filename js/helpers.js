/**
 * helpers.js - Canvas Management System
 */

// 1. ගෝලීය canvas විචල්‍යය නිර්මාණය කිරීම
let canvas = null;

/**
 * Canvas එක අලුතින් නිර්මාණය කරන ශ්‍රිතය
 * @param {string} canvasId - HTML හි ඇති canvas tag එකේ id එක
 */
window.initCanvas = function (canvasId = 'c') {
    const canvasElement = document.getElementById(canvasId);
    if (!canvasElement) {
        console.error("Canvas element not found in HTML!");
        return;
    }

    // Fabric.js canvas එක නිර්මාණය කිරීම
    canvas = new fabric.Canvas(canvasId, {
        width: canvasElement.width,
        height: canvasElement.height,
        backgroundColor: '#ffffff'
    });

    console.log("Canvas initialized successfully!");
};

/**
 * Canvas එක ලබා ගැනීමට භාවිතා කරන හෙල්පර් ශ්‍රිතය
 */
window.getCanvas = function () {
    if (!canvas) {
        console.warn("Canvas not initialized yet. Call initCanvas() first.");
        return null;
    }
    return canvas;
};

/**
 * Canvas එක resize කිරීම සඳහා අවශ්‍ය නම් භාවිතා කළ හැක
 */
window.resizeCanvas = function (width, height) {
    if (canvas) {
        canvas.setDimensions({ width: width, height: height });
        canvas.renderAll();
    }
};
