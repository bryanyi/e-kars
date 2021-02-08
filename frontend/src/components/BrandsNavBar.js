import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchBrand } from "../redux/actions/searchAction";
import "../css/Brands.css";

const BrandsNavBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [searchClicked, setSearchClicked] = useState("");
  const carElements = useSelector((state) => state.carElements);
  const { carBrands } = carElements;

  useEffect(() => {
    if (searchClicked === "") {
      return;
    } else {
      dispatch(searchBrand(searchClicked));
    }
  }, [searchClicked]);
  return (
    <div className="BrandsNavBar" data-aos="fade-in" data-aos-duration="4000">
      <ul onClick={() => console.log("ul")}>
        {carBrands.map((brand, index) => {
          return (
            <li
              key={index}
              onClick={(e) => {
                setSearchClicked(brand.toLowerCase());
                history.push("/products");
                e.stopPropagation();
              }}
            >
              {brand}
            </li>
          );
        })}
        <li
          onClick={() => {
            history.push("/products");
            history.go(0);
          }}
        >
          All Cars
        </li>
      </ul>
    </div>
  );
};

export default BrandsNavBar;
