import React from "react"

import { User } from "firebase/auth";
import { RootState } from "../../redux/store"
import { connect, ConnectedProps } from 'react-redux'
import { useHistory } from "react-router-dom"

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


import Login from "../Login"

import { openModal } from "../../redux/actions/modal"
import { signOut } from "../../redux/actions/auth"


import useSnackbarMessages from "../../hooks/useSnackbarMessages"

import sidebarItems from "./sidebar_items";

const SidebarContent: React.FC<PropsFromRedux> = ({ openModal, signOut, user, error, loading, success }) => {

    let history = useHistory()

    let userBool: boolean = Boolean(user)

    useSnackbarMessages([
        {
            value: error,
            severity: "error"
        },
        {
            value: loading,
            severity: "info"
        },
        {
            value: success,
            severity: "success",
        }
    ])

    return (
        <div>
            <Toolbar />
            <Divider />
            {typeof user !== "undefined" &&
                <List>
                    {sidebarItems.map((item, index) => (
                        <>
                            {
                                userBool === item.auth ?

                                    <ListItem button
                                        key={item.text + index}
                                        onClick={
                                            () =>
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
                    {
                        userBool &&
                        <ListItem button onClick={() => signOut()} >
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary={"Logout"} />
                        </ListItem>

                    }

                </List>
            }
            <Divider />
        </div>
    )

}

function mapStateToProps(state: RootState) {

    let props: { 
        user: User | null | undefined,
        error: string | null,
        loading: string | null,
        success: string | null

    } = 
    { 
        user: state.auth.user,
        error:  state.auth.error,
        loading: state.auth.loading,
        success: state.auth.success
    }

    return props
}

function mapDispatchToProps(dispatch: any) {
    return {
        openModal: (type: string) => dispatch(openModal(<Login type={type} />)),
        signOut: () => dispatch(signOut())
    }
}

const connector = connect(mapStateToProps, mapDispatchToProps)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(SidebarContent)