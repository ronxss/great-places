import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom'

type PageProps = {
  children: React.ReactNode
}

const Page = ({ children }: PageProps) => {
  const navigate = useNavigate()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box flexGrow={1}>
            <Button color="inherit" onClick={() => navigate('/') }>Busca</Button>
            <Button color="inherit" onClick={() => navigate('/register') }sx={{ marginLeft: 2 }}>Cadastro</Button>
          </Box>
          <Typography variant="h6" component="div">
            Great Places
          </Typography>
        </Toolbar>
      </AppBar>

    <Box component='main' margin= {3}> 
      { children }
    </Box>
    </Box>
  )
}

export default Page