function showTextPanel(){
  document.getElementById("properties").classList.remove("hidden");
}

function hideTextPanel(){
  document.getElementById("properties").classList.add("hidden");
}
/**
 * ඕනෑම element එකක් Drag කිරීමට හැකි වන පරිදි සකසයි
 * @param {string} elementId - Drag කළ යුතු පැනල් එකේ ID එක
 */
function makeDraggable(elementId) {
    const el = document.getElementById(elementId);
    let offsetX = 0, offsetY = 0, isDragging = false;

    el.addEventListener('mousedown', (e) => {
        isDragging = true;
        offsetX = e.clientX - el.offsetLeft;
        offsetY = e.clientY - el.offsetTop;
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        el.style.left = (e.clientX - offsetX) + 'px';
        el.style.top = (e.clientY - offsetY) + 'px';
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });
}

// පැනල් එක පටන් ගන්නා විට මෙය ක්‍රියාත්මක කරන්න
window.addEventListener('load', () => {
    makeDraggable('gradientEditor');
});
