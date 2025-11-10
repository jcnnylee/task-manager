import { Button, Box , Stack, Typography } from '@mui/material'
import ListAltIcon from '@mui/icons-material/ListAlt'
import { Link } from 'react-router-dom'
import bgImage from '../assets/background.jpg'

function HomePage() {
    return (
        <Stack direction = 'row' justifyContent = 'center' minHeight = '80vh' marginY = 'auto'>
            <Box padding = {16} marginY = 'auto'>
                <Stack direction = 'row' spacing={1} alignItems = 'center'>
                    <ListAltIcon/>
                    <Typography variant = 'h5' fontweight = 'medium'>
                        Task Manager
                    </Typography>
                </Stack>

                <Stack marginY = {10} spacing = {2}>
                    <Typography variant = 'h4'>
                        Welcome to Jenny&apos;s <br/> 
                        Task Manager Project!
                    </Typography>
                    <Typography variant = 'subtitle1' color = 'GrayText'>Built by Jenny Lee</Typography>
                </Stack>

                <Button size = 'large' variant = 'contained' component = {Link} to = '/tasks'>
                    See My Tasks
                </Button>
            </Box>

            <Box
                sx = {{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '50',
                    //backgroundColor: 'gray',
                    width: '50%',
                    margin: 8,
                    borderRadius: 10,
                }}> 
            </Box>
            
        </Stack>
    )
}

export default HomePage