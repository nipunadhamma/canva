window.getCanvas = function () {
  if (!canvas) {
    console.error("Canvas not initialized!");
    return null;
  }
  return canvas;
};


