export default function outsideClick(element, events, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!element.hasAttribute(outside)) {
    events.forEach((userEvent) => {
      setTimeout(() => html.addEventListener(userEvent, handleOutsideClick)); // isso foi usado o setTimeout, pois ai o evento de bubble acontece primeiro que o addEventListener, pois lembre-se o addEventListener é assicrono, só é reaizado depois que algo acontece, e o setTimeout também
    });
    element.setAttribute(outside, "");
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      events.forEach((userEvent) => {
        html.removeEventListener(userEvent, handleOutsideClick);
      });
      callback();
    }
  }
}
