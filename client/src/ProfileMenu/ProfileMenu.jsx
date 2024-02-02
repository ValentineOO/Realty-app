import React from "react";
import { Avatar, MantineProvider, Menu } from "@mantine/core";
import "@mantine/core/styles.css";

const ProfileMenu = ({ user, logout }) => {
  return (
    <MantineProvider>
      <Menu>
        <Menu.Target>
          <Avatar src={user?.picture} alt="user image" radius={"xl"} />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item>Favorites</Menu.Item>

          <Menu.Item>Bookings</Menu.Item>

          <Menu.Item
            onClick={() => {
              localStorage.clear();
              logout();
            }}
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </MantineProvider>
  );
};

export default ProfileMenu;
