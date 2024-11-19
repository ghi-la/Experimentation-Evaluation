'use client';

import { Box, Container } from '@mui/material';

export default function AppWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: 'center',
          p: 4,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: '#fff',
        }}
      >
        {children}
      </Container>
    </Box>
  );
}
