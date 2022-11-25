import React from "react";
import { useState, useEffect, useRef } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import "../main-page/arrow.css";
import Data from "../../data2";
import Card from "../main-page/cardcomponent2";
import { Link } from "react-router-dom";

function Filtercomponent(props) {
  const [inputValue, setInputValue] = useState("india");
  const [value, setValue] = useState([4.2, 4.9]);
  const [price, setPrice] = useState([
    10 * props.multiple,
    300 * props.multiple,
  ]);
  const [zero, setzero] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setPrice(newValue);
  };
  let arr2;
  arr2 = Data.filter(
    (x) =>
      x.type == inputValue &&
      x.ratings > value[0] &&
      x.ratings < value[1] &&
      x.priceadult > price[0] / props.multiple &&
      x.priceadult < price[1] / props.multiple
  );

  const comp =
    arr2 &&
    arr2.map((x) => {
      return (
        <Card
          multiple={props.multiple}
          symbol={props.symbol}
          priceadult={x.priceadult}
          title={x.title}
          place={x.place2}
          images={x.images}
          ratings={x.ratings}
          rating={x.rating}
          key={x.id1}
          id1={x.id1}
        />
      );
    });

  return (
    <div className="flex w-[75%] m-auto">
      <Link to="/">
        <div className="bg-slate-200 rounded p-1 hover:bg-slate-400">back home </div>
      </Link>
      <div className="filter m-6">
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">select type</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="india"
            name="radio-buttons-group"
            onChange={(e) => setInputValue(e.target.value)}
          >
            <FormControlLabel
              value="india"
              control={<Radio />}
              label="indian"
            />
            <FormControlLabel
              value="international"
              control={<Radio />}
              label="international"
            />
            <FormControlLabel
              value="popular"
              control={<Radio />}
              label="popular"
            />
          </RadioGroup>
        </FormControl>

        <Box sx={{ width: 300, marginTop: "100px" }}>
          <div> filter by ratings </div>
          <Slider
            defaultValue={4.2}
            min={4.0}
            step={0.1}
            max={5.0}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
          />
        </Box>
        <div>min rating: {value[0]}</div>
        <div>max rating: {value[1]}</div>

        <Box sx={{ width: 300, marginTop: "100px" }}>
          <div> filter by pricerange </div>
          <Slider
            defaultValue={4.2}
            min={10 * props.multiple}
            step={5}
            max={300 * props.multiple}
            value={price}
            onChange={handleChange2}
            valueLabelDisplay="auto"
          />
        </Box>
        <div>
          min price {price[0]} {props.symbol}{" "}
        </div>
        <div>
          max price {price[1]} {props.symbol}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-12 "> {comp} </div>
    </div>
  );
}

export default Filtercomponent;
