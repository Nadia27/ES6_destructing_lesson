// //CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

let [honda, tesla] = cars;

for (const {
  model: name,
  coloursByPopularity: color,
  speedStats: { topSpeed: mph }
} of cars) {
  console.log(
    "model: " + name + " Popular color: " + color[0] + ", speedStats: " + mph
  );
}

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{tesla.TopSpeed}</td>
      <td>{tesla.TopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{honda.TopSpeed}</td>
      <td>{honda.TopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
