'use client';
import { Provider } from 'react-redux';
import Loading from './components/Loading';
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
      <Loading />
    </Provider>
  );
}
