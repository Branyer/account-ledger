import React from "react"

import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';



type Props = {
    drawerWidth: number,
    handleDrawerToggle: React.MouseEventHandler<HTMLButtonElement>
}

const Appbar: React.FC<Props> = ({drawerWidth, handleDrawerToggle}) => {

    return (
        <AppBar
        position="fixed"
        sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
        }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
                HOME
            </Typography>
        </Toolbar>
    </AppBar>
    )

}

export default Appbar