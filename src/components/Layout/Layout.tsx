import React, { useState , useCallback} from "react"

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';


import Sidebar from "../Sidebar";
import Appbar from "../Appbar";

import useAuth from '../../hooks/useAuth';

const drawerWidth = 240

type Props = {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {

    const [mobileOpen, setMobileOpen] = useState(false);

    useAuth()

    const handleDrawerToggle = useCallback(() => {
        setMobileOpen(value => !value);
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>

            <CssBaseline />

            <Appbar
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
            />

            <Sidebar
                drawerWidth={drawerWidth}
                mobileOpen={mobileOpen}
                handleDrawerToggle={handleDrawerToggle}
            />

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {children}
            </Box>

        </Box>
    )

}

export default Layout