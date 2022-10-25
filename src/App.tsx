import React, { Suspense } from 'react';
import AppRoutes from './routes';
import { CssBaseline } from '@mui/material'
import Loading from './components/loading'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <CssBaseline />
      <AppRoutes />
    </Suspense>
  );
}

export default App;