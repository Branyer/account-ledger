import React from "react"

import { History } from "history"

import HomeIcon from '@mui/icons-material/Home';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import AssessmentIcon from '@mui/icons-material/Assessment';

export type SidebarItem = {

    text: string
    icon: React.FC,
    action: Function

}


const sidebarItems: SidebarItem[] = [
    {
        text: "Home",
        icon: HomeIcon,
        action: (history: History) => history.push("/home")
    },
    {
        text: "Profile",
        icon: RecentActorsIcon,
        action: (history: History) => history.push("/account/profile"),
    },
    {
        text: "Reports",
        icon: AssessmentIcon,
        action: (history: History) => history.push("/account/reports"),
    }


]

export default sidebarItems