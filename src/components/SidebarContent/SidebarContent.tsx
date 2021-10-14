import React from "react"

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import {useHistory} from "react-router-dom"

import sidebarItems from "./sidebar_items";

const SidebarContent: React.FC = () => {

    let history = useHistory()

    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {sidebarItems.map((item, index) => (
                    <ListItem button key={item.text + index} onClick={()=> item.action(history) }>
                        <ListItemIcon>
                            <item.icon />
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
        </div>
    )

}

export default SidebarContent