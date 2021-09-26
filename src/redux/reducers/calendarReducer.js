export default initialState => (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_DATA': 
    return {
      ...state,
      calendarPage: {
        ...payload.calendarPage,
      }
    };
    default:
      return state;
  }
};
