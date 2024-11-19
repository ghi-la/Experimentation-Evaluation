'use client';

import { Button } from '@mui/material';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { openNotification } from './store/actions';

export default function Home() {
  const dispatch = useDispatch();
  return (
    <>
      <div>Hello, World!</div>
      <Link href="/form">Access the registration form</Link>
      <Button variant="contained" color="primary" onClick={()=>dispatch(openNotification({severity:"success", message:"Test"}))}>Test Alert</Button>
    </>
  );
}
