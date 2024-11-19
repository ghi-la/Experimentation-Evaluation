'use client';
import { Provider } from 'react-redux';
import Notification from './components/Notification';
import store from './store/store';

export default function AppWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      {children}
      <Notification />
    </Provider>
  );
}
