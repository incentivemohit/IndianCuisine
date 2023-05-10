import { Box } from "@mui/material";
import React from "react";
import { filteredItems } from "../Store/filterSlice";
import { useDispatch } from "react-redux";

function LeftSidebar() {
  const dispatch = useDispatch();

  return (
    <>
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
    </>
  );
}

export default LeftSidebar;
