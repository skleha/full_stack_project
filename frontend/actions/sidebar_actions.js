
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});

export const showHideSidebar = () => dispatch => (
  dispatch(toggleSidebar())
);
