import React from "react"

import { History } from "history"

import HomeIcon from '@mui/icons-material/Home';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';

export type SidebarItem = {

    text: string
    icon: React.FC,
    action?: Function,
    link: boolean,
    type?: string,
    auth: boolean

}


const sidebarItems: SidebarItem[] = [
    {
        text: "Home",
        icon: HomeIcon,
        link: true,
        auth: true,
        action: (history: History) => history.push("/home"),
    },
    {
        text: "Profile",
        icon: RecentActorsIcon,
        link: true,
        auth: true,
        action: (history: History) => history.push("/account/profile"),
    },
    {
        text: "Reports",
        icon: AssessmentIcon,
        link: true,
        auth: true,
        action: (history: History) => history.push("/account/reports"),
    },
    {
        text: "Login",
        icon: LoginIcon,
        link: false,
        auth: false,
        type: "Login",
        
    },
    {
        text: "Sign Up",
        icon: AssignmentIcon,
        link: false,
        auth: false,
        type: "Sign Up",

    }


]

export default sidebarItems