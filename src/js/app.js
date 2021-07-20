const STATE_TOGGLE = {
  ATTRIBUTE: "data-toggle-state",
  PROP: "toggleState",
};
const TOGGLE_VALUE = { OPEN: "open", CLOSED: "closed" };

const toggleDrawer = (e) => {
  const state = e.target.dataset[STATE_TOGGLE.PROP];
  e.target.dataset[STATE_TOGGLE.PROP] =
    state === TOGGLE_VALUE.OPEN ? TOGGLE_VALUE.CLOSED : TOGGLE_VALUE.OPEN;
};

const initToggles = () => {
  Array.from(document.querySelectorAll(`[${STATE_TOGGLE.ATTRIBUTE}]`)).map(
    (el) => (el.onclick = toggleDrawer)
  );
};

const start = () => {
  initToggles();

  // initNavToggle(document.querySelectorAll("nav")[0]);
};

(() => {
  start();
})();
