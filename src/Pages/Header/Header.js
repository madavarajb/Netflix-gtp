import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Utils/Auth";
import "./Header.scss";
import { Avatar, Button, DropdownMenu, Flex } from "@radix-ui/themes";
import { ImageLinks } from "../../Images/ImageLinks";
import { EnterIcon, GearIcon } from "@radix-ui/react-icons";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handlesignout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <div className="browser-header">
        <div className="main-logo">
          <span>Movie</span>
          <span style={{ color: "orange" }}>buff</span>
        </div>

        <div className="avatar-icon-dropdown">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <Flex gap="2">
                <Avatar
                  size="3"
                  src={ImageLinks.AVATAR}
                  fallback="A"
                  radius="full"
                />
              </Flex>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              color="gray"
              style={{ backgroundColor: "black", color: "white" }}
            >
              <DropdownMenu.Item>
                <EnterIcon /> Login
              </DropdownMenu.Item>
              <DropdownMenu.Item>
                <GearIcon />
                Settings
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        {/* {user ? (
          <button onClick={handlesignout}>Sign Out</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )} */}
      </div>
    </div>
  );
};

export default Header;
