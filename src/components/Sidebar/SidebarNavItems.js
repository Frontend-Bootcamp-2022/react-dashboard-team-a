import {IconDashboard} from "../Icons/IconDashboard";
import {IconLogOut} from "../Icons/IconLogOut";
import {IconMembers} from "../Icons/IconMembers";
import {IconModules} from "../Icons/IconModules";
import {IconProjects} from "../Icons/IconProject";
import {IconReports} from "../Icons/IconReports";
import {IconSprint} from "../Icons/IconSprint";


const sidebarNavItems = [
  {
    display: 'Dashboard',
    icon: <IconDashboard />
  },
  {
    display: 'Projects',
    icon: <IconProjects />
  },
  {
    display: 'Modules',
    icon: <IconModules />
  },
  {
    display: 'Sprint',
    icon: <IconSprint />
  },
  {
    display: 'Members',
    icon: <IconMembers />
  },
  {
    display: 'Reports',
    icon: <IconReports />
  },
  {
    display: 'Log out',
    icon: <IconLogOut />
  },
]

export default sidebarNavItems;