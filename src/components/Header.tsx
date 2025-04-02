import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { Link, useLocation } from "react-router-dom";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-transparent">
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <AnimatedGradientText className="text-sm font-medium">
            <Link to="/">
              <p className="font-bold text-3xl">EyeDeep-Net</p>
            </Link>
          </AnimatedGradientText>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        {["Home", "Performance-Metrics", "About"].map((item, index) => {
          const path =
            item === "Home" ? "/" : `/${item.toLowerCase().replace(/ /g, "-")}`;
          const isActive = location.pathname === path;
          return (
            <NavbarItem key={index} isActive={isActive}>
              <Link
                to={path}
                className={isActive ? " font-bold" : "text-gray-700"}
              >
                {item}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end"></NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => {
          const path = `/${item.toLowerCase().replace(/ /g, "-")}`;
          const isActive = location.pathname === path;
          return (
            <NavbarMenuItem key={index}>
              <Link
                to={path}
                className={isActive ? "font-bold" : "text-gray-700"}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
