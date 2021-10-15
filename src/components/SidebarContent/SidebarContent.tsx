import React from "react"

import { connect, ConnectedProps } from 'react-redux'

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';

import {useHistory} from "react-router-dom"

import sidebarItems from "./sidebar_items";

import {openModal} from "../../redux/actions/modal"

import Login from "../Login"

import {RootState, AppDispatch} from "../../redux/store"


import { User} from "firebase/auth";

const SidebarContent: React.FC<PropsFromRedux> = ({openModal, user}) => {

    let history = useHistory()

    let userBool : boolean = Boolean(user)

    return (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {sidebarItems.map((item, index) => (
                    <>
                        {
                            userBool === item.auth ? 

                            <ListItem button 
                                key={item.text + index} 
                                onClick={
                                    ()=> 
                                    item.link ? 
                                    item.action && item.action(history)  
                                    :
                                    item.type && openModal(item.type)
                                }
                            >
                                <ListItemIcon>
                                    <item.icon />
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                            :
                            null

                        }
                    </>
                ))}
            </List>
            <Divider />
        </div>
    )

}

function mapStateToProps(state : RootState) {

    let props : { user: User | null} = { user : state.auth.user }

    return  props 
}

function mapDispatchToProps(dispatch : AppDispatch ) {
    return  {
        openModal: (type : string) => dispatch(openModal(<Login type={type} />))
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(SidebarContent)