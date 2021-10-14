import React from "react"
import Drawer from '@mui/material/Drawer';
import Box from "@mui/material/Box"

type Props = {
    drawerWidth: number,
    mobileOpen: boolean,
    handleDrawerToggle: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void) | undefined
}

const Sidebar: React.FC<Props> = ({ drawerWidth, mobileOpen, handleDrawerToggle }) => {

    return (

        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {/* {drawer} */}
            </Drawer>

            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
            >
                {/* {drawer} */}
            </Drawer>
        </Box>
    )

}

export default Sidebar