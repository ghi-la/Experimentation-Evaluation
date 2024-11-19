export const isLoading = () => ({
  type: 'IS_LOADING',
});
export const isLoaded = () => ({
  type: 'IS_LOADED',
});
export const openNotification = (payload: {
  severity: string;
  message: string;
}) => ({
  type: 'OPEN_NOTIFICATION',
  payload,
});
export const closeNotification = () => ({
  type: 'CLOSE_NOTIFICATION',
});
export const setUser = (payload: any) => ({
  type: 'SET_USER',
  payload,
});
