export const mouseEvents = (canvas, e) => {
  const bounds = canvas.getBoundingClientRect();
  return {
    x: e.pageX - bounds.left - window.scrollX,
    y: e.pageY - bounds.top - window.scrollY,
  };
};

export const velocityCalculator = (mouse, position, velocity = 10) => {
  const angle = Math.atan2(mouse.y - position.y, mouse.x - position.x);

  return {
    x: Math.cos(angle) * velocity,
    y: Math.sin(angle) * velocity,
  };
};
