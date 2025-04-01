import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { Link } from "react-router-dom"; // ✅ Use React Router's Link
import { RainbowButton } from "./magicui/rainbow-button";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

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
              <p className="font-bold text-lg">EyeDeep-Net</p>
            </Link>
          </AnimatedGradientText>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        <NavbarItem isActive>
          <Link to="/">Home</Link> {/* ✅ No Reload */}
        </NavbarItem>
        <NavbarItem>
          <Link to="/features">Features</Link> {/* ✅ No Reload */}
        </NavbarItem>
        <NavbarItem>
          <Link to="/integrations">Integrations</Link> {/* ✅ No Reload */}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link to="/predict">
            <RainbowButton>Diagnose</RainbowButton> {/* ✅ No Reload */}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              to={`/${item.toLowerCase().replace(/ /g, "-")}`} // ✅ Converts menu items to routes
              className="w-full"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
