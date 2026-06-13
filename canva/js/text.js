// ===================================
// CANVA MINI FONT PRO - TEXT SYSTEM
// CLEAN + FIXED VERSION
// ===================================


// ================================
// ADD TEXT
// ================================
window.addText = function () {

    const canvas = getCanvas();
    if (!canvas) return;

    const text = new fabric.Textbox("Type here...", {
    left: 100,
    top: 100,
    width: 250,
    fontSize: 30,
    fontFamily: "FM-Arjunn", // මෙහි නම හරියටම ඔබේ FONT_LIST එකේ ඇති නම දෙන්න
    fill: "#000000",
    editable: true,
    textBaseline: 'alphabetic' // අනිවාර්යයෙන්ම එක් කරන්න
});
canvas.add(text);
    canvas.add(text);
    canvas.setActiveObject(text);
    canvas.requestRenderAll();
};


// ================================
// FONT FAMILY CHANGE
// ================================
window.changeFontFamily = function (fontName) {

    const canvas = getCanvas();
    if (!canvas) return;

    const obj = canvas.getActiveObject();
    if (!obj || (obj.type !== "textbox" && obj.type !== "text")) return;

    obj.set("fontFamily", fontName);

    if (obj.initDimensions) obj.initDimensions();

    canvas.requestRenderAll();
};


// ================================
// FONT SIZE
// ================================
window.changeFontSize = function (size) {

    const canvas = getCanvas();
    if (!canvas) return;

    const obj = canvas.getActiveObject();
    if (!obj) return;

    obj.set("fontSize", parseInt(size));

    canvas.requestRenderAll();
};


// ================================
// TEXT COLOR
// ================================
window.changeTextColor = function (color) {

    const canvas = getCanvas();
    if (!canvas) return;

    const obj = canvas.getActiveObject();
    if (!obj) return;

    obj.set("fill", color);

    canvas.requestRenderAll();
};


// ================================
// QUICK SINHALA FONT
// ================================
window.applySinhalaFont = function () {
    changeFontFamily("FM Abhaya");
};


// ================================
// UI SYNC (Properties Panel)
// ================================
window.updateTextUI = function () {

    const canvas = getCanvas();
    if (!canvas) return;

    const obj = canvas.getActiveObject();
    if (!obj) return;

    const size = document.getElementById("fontSize");
    const color = document.getElementById("colorPicker");
    const family = document.getElementById("fontFamily");

    if (size) size.value = obj.fontSize || 30;
    if (color) color.value = obj.fill || "#000000";
    if (family) family.value = obj.fontFamily || "Arial";
};

// ================================
// LIVE SHADOW SYSTEM
// ================================
function applyShadowLive() {

    const canvas = getCanvas();
    if (!canvas) return;

    const obj = canvas.getActiveObject();
    if (!obj || (obj.type !== "textbox" && obj.type !== "text")) return;

    const colorEl = document.getElementById("shadowColor");
    const blurEl = document.getElementById("shadowBlur");
    const xEl = document.getElementById("shadowX");
    const yEl = document.getElementById("shadowY");

    obj.set("shadow", new fabric.Shadow({
        color: colorEl ? colorEl.value : "#000",
        blur: blurEl ? parseInt(blurEl.value) : 10,
        offsetX: xEl ? parseInt(xEl.value) : 5,
        offsetY: yEl ? parseInt(yEl.value) : 5
    }));

    canvas.requestRenderAll();
}


// ================================
// LIVE OUTLINE SYSTEM
// ================================
function applyOutlineLive() {
    const canvas = getCanvas();
    if (!canvas) return;

    const obj = canvas.getActiveObject();
    // දැන් Image සහ Text දෙකටම වැඩ කිරීමට මෙය වෙනස් කළා
    if (!obj || (obj.type !== "textbox" && obj.type !== "text" && obj.type !== "image")) return;

    const colorEl = document.getElementById("outlineColor");
    const sizeEl = document.getElementById("outlineSize");
    const display = document.getElementById("outlineValueDisplay");
    
    // 1. අගය පෙන්වන තිරය යාවත්කාලීන කිරීම (Object එකෙන් පිටත)
    if (display && sizeEl) {
        display.innerText = sizeEl.value;
    }

    // 2. Object එකේ ගුණාංග සැකසීම (කොමා භාවිතා කරමින්)
    obj.set({
        stroke: colorEl ? colorEl.value : "#000",
        strokeWidth: sizeEl ? parseFloat(sizeEl.value) : 0,
        strokeLineJoin: "round",
        paintFirst: 'stroke'
    });
    
    canvas.requestRenderAll();
}

// ================================
// REMOVE OUTLINE
// ================================
window.removeTextOutline = function () {

    const canvas = getCanvas();
    if (!canvas) return;

    const obj = canvas.getActiveObject();
    if (!obj) return;

    obj.set({
        stroke: null,
        strokeWidth: 0
    });

    canvas.requestRenderAll();
};


// ================================
// EMBOSS EFFECT (CLEAN)
// ================================
window.setEmbossEffect = function (color = "#000") {

    const canvas = getCanvas();
    if (!canvas) return;

    const obj = canvas.getActiveObject();
    if (!obj) return;

    obj.set("shadow", new fabric.Shadow({
        color: color,
        blur: 1,
        offsetX: 2,
        offsetY: 2
    }));

    obj.set({
        stroke: "#ffffff",
        strokeWidth: 1
    });

    canvas.requestRenderAll();
};


// ================================
// CLEAR ALL EFFECTS
// ================================
window.clearTextEffects = function () {

    const canvas = getCanvas();
    if (!canvas) return;

    const obj = canvas.getActiveObject();
    if (!obj) return;

    obj.set({
        shadow: null,
        stroke: null,
        strokeWidth: 0
    });

    canvas.requestRenderAll();
};


// ================================
// LIVE EVENTS (IMPORTANT FIX)
// ================================
window.addEventListener("load", function () {

    const canvas = getCanvas();
    if (!canvas) return;

    canvas.on("selection:created", updateTextUI);
    canvas.on("selection:updated", updateTextUI);
    canvas.on("object:modified", updateTextUI);
});


// ================================
// SAFE EXPORT FUNCTIONS
// ================================
window.applyShadowLive = applyShadowLive;
window.applyOutlineLive = applyOutlineLive;
