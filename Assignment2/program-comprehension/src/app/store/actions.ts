export const isLoading = () => ({
  type: 'IS_LOADING',
});
export const isLoaded = () => ({
  type: 'IS_LOADED',
});
export const openAlert = (payload: { severity: string; message: string }) => ({
  type: 'OPEN_ALERT',
  payload,
});
export const closeAlert = () => ({
  type: 'CLOSE_ALERT',
});
