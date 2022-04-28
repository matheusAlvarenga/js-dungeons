export const mouseEvents = (canvas, e) => {
  const bounds = canvas.getBoundingClientRect();
  return {
    x: e.pageX - bounds.left - scrollX,
    y: e.pageY - bounds.top - scrollY,
  };
};
