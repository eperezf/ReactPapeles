import Root from "./components"
export default {
  name: "reactpapeles-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      autoPrefetch: "in-view",
      isMobileSearchVisible: false,
      menu: [],
    }
  },
  actions: {
    theme: {
      toggleMobileSearch: ({state})=> {
        state.theme.isMobileSearchVisible = !state.theme.isMobileSearchVisible
      }
    }
  }
};
