import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Badge, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import DataUsageIcon from "@mui/icons-material/DataUsage";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import DrawerSidebar from "../../components/Sidebar/DrawerSidebar";
import { useSelector, useDispatch } from "react-redux";
import { searchItems } from "../Store/searchSlice";

function Header() {
  const counter = useSelector((state) => state.cart.counter);
  const [inputData, setInputData] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const dispatch = useDispatch();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className="bg-white d-block">
          <Box className="row w-100 py-2">
            <Box className="col-md-2  d-flex justify-content-center align-items-center">
              <Box className="logo-box">
                <Link
                  to="/"
                  id="logo"
                  className="text-dark text-decoration-none"
                  style={{ fontFamily: "Pacifico ,cursive" }}
                >
                  Indian Cuisine
                </Link>
              </Box>
            </Box>

            <Box className="col-md-5  d-flex justify-content-center align-items-center">
              <Box
                className=" rounded w-100 border border-2 d-flex justify-content-center align-items-center"
                style={{ height: "50px" }}
              >
                <input
                  type="text"
                  className="w-100 py-2 px-3 search-input border-0"
                  value={inputData}
                  placeholder="Search here..."
                  onChange={(e) => setInputData(e.target.value)}
                />
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(searchItems(inputData))}
                >
                  <i className="fa fa-search text-dark px-3 "></i>
                </span>
              </Box>
            </Box>

            <Box className="col-md-5 top-column">
              <div id="menuButton">
                <DrawerSidebar />
              </div>
              <div className="top-right d-flex  align-items-center">
                <Link to="/" className="text-decoration-none mx-2 ">
                  Home
                </Link>
                <Link to="/products" className="text-decoration-none mx-2 ">
                  Products
                </Link>
                <Link to="/about" className="text-decoration-none mx-2 ">
                  About
                </Link>
                <Link to="/cart" className="text-decoration-none mx-4 ">
                  <Badge badgeContent={counter} color="success">
                    <ShoppingCartOutlinedIcon className="text-dark" />
                  </Badge>
                </Link>
                <div>
                  <IconButton
                    size="small"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    className="bg-dark"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>
                      <PersonIcon /> &nbsp; My Account
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                      <DataUsageIcon />
                      &nbsp; Order Status
                    </MenuItem>
                    <Link to="/signin">
                      <MenuItem onClick={handleClose}>
                        <LockOpenIcon />
                        &nbsp; SignIn
                      </MenuItem>
                    </Link>

                    <Link to="/signup">
                      <MenuItem onClick={handleClose}>
                        <AppRegistrationIcon />
                        &nbsp; SignUp
                      </MenuItem>
                    </Link>
                  </Menu>
                </div>
              </div>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
