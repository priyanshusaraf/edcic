export const scrollToTop = (behavior = "smooth") => {
  window.scrollTo({ top: 0, behavior });
};

export const scrollToElement = (elementId, behavior = "smooth") => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior });
  }
};

export const getScrollPosition = () => {
  return {
    x: window.pageXOffset || document.documentElement.scrollLeft,
    y: window.pageYOffset || document.documentElement.scrollTop,
  };
}; 