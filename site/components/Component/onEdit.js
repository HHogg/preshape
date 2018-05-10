export default (state, component, prop, value) => ({
  ...state,
  [component]: {
    ...state[component],
    [prop]: value,
  },
});
