import { AppBar, Toolbar, Typography, Box, IconButton} from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt' // example logo/icon
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import PersonIcon from '@mui/icons-material/Person'

function Nav() {
  return (
    <AppBar color="inherit"
    >
      <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
        {/*Menu Icon does not work for now, just to make it look stylish*/}
        <MenuIcon sx={{ marginRight: 2, fontSize: 30 }} />
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          
          <ListAltIcon sx={{ marginRight: 0.5, fontSize: 32, color: '#505081'}} />
          <Typography variant="h6" fontWeight="bold" color = '#505081'>
            TaskManager
          </Typography>
        </Link>

       
        <Box sx={{ flexGrow: 1 }} />

        <IconButton color = 'inherit'
          sx = {{
            borderRadius: '50%',
            border: '1px solid gray',}}
        >
          <PersonIcon sx = {{color:'#505081'}} />
        </IconButton>

      </Toolbar>
    </AppBar>
  )
}

export default Nav