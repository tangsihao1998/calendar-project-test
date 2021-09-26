export const setSelectedDate = selectedDate => dispatch => {
  dispatch({ type: 'SET_SELECTED_DATE', payload: { selectedDate } });
};