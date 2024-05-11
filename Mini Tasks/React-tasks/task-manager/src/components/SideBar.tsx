import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="white" />
          DashBoard
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink to="Create">
          <ListIcon as={EditIcon} color="white" />
          Add Task
        </NavLink>
      </ListItem>

      <ListItem>
        <NavLink to="Profile">
          <ListIcon as={AtSignIcon} color="white" />
          My Profile
        </NavLink>
      </ListItem>
    </List>
  );
};

export default SideBar;
