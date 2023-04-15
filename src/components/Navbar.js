import { useNavigate }  from "react-router-dom";
import { AppBar, Avatar, Badge, Box, Button, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import { Anchor, Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";


//Customizing MUI Components
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
})

const LogoBox = styled(Box)({
    display: "flex",
    alignItems: "center",
}) 

const IconBox = styled(Box)({
   display: "flex",
   alignItems: "center",
   gap: "20px"
})

function Navbar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    return(
        <AppBar position="sticky">
            <StyledToolbar>
                    <LogoBox>
                        <Anchor sx={{height: "40px", width:"40px", mr: 1, display: "block"}} onClick={() => { navigate("/") }} />
                        <Typography 
                            variant="h6"
                            sx={{display: {xs:"none", sm:"block"}, mr: 5}}
                            
                        >
                            Dashboard
                        </Typography>
                   
                        <Button sx={{color: "white", display: {xs:"none", sm:"block"}}} onClick={() => { navigate("/users") }}>List User</Button>
                        <Button sx={{color: "white", display: {xs:"none", sm:"block"}}} onClick={() => { navigate("/create-user") }}>Create User</Button>
                    </LogoBox>
                    <IconBox onClick={() => {setOpen(true)}}>
                        <Badge badgeContent={4} color="error">
                            <Mail />
                        </Badge>
                        <Badge badgeContent={2} color="error">
                            <Notifications />
                        </Badge>

                        <Avatar
                        onClick={() => {}}
                        sx={{ width: 30, height: 30 }}
                        src="https://randomuser.me/api/portraits/men/11.jpg"
                        />
                    </IconBox>

            </StyledToolbar>

            {/* MUI Menu:  when profile is clicked (Icons Avatar/IconBox) Menu will be shown */}
            <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={() => {setOpen(false)}}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>

        </AppBar>
    );
}

export default Navbar;