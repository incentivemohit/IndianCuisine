import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import { useDispatch } from "react-redux";
import { filteredItems } from "../Store/filterSlice";

export default function DrawerSidebar({ color }) {
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = () => (
    <Box
      className="p-2"
      style={{ width: "280px", backgroundColor: `${color}` }}
    >
      <Box>
        <div id="top">
          <p className="text-center bg-dark text-white card">
            Filter By Categories
          </p>
          <ul className="filter list-unstyled ">
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  onClick={() => {
                    dispatch(filteredItems(1));
                  }}
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Curries
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  onClick={() => {
                    dispatch(filteredItems(2));
                  }}
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Rice/Biryani
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  onClick={() => {
                    dispatch(filteredItems(3));
                  }}
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Breads
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div id="center">
          <p className="text-center bg-dark text-white card">
            Filter By Prices
          </p>
          <ul className="filter list-unstyled ">
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  onClick={() => {
                    dispatch(filteredItems(4));
                  }}
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  less than 100
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  onClick={() => {
                    dispatch(filteredItems(5));
                  }}
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  100-250
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  onClick={() => {
                    dispatch(filteredItems(6));
                  }}
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  250-350
                </label>
              </div>
            </li>
            <li>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  onClick={() => {
                    dispatch(filteredItems(7));
                  }}
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  greater than 350
                </label>
              </div>
            </li>
          </ul>
        </div>
      </Box>
    </Box>
  );

  return (
    <div className="menu">
      {["Left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <DensitySmallIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
