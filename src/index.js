//import animals from "./data";

//Destructing

//console.log(animals);
//const [cat, dog] = animals; //Destructure animals array

//cat and dog are pulled out of array and are now objects that can be destructured

//console.log(cat);

//Destructing objects
//to change the property name
//const {name: dogName, sound: dogSound} = dog;

// console.log(dogName);
// console.log(dogSound);

// Provide default values
// const { name = "Bones", sound = "Bark" } = dog;

//Grab nested values
//const {
//feedingRequirements: { food, water }
//} = dog;

//console.log(food);

// To change the variable names

// //CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

let [honda, tesla] = cars;

console.log(tesla);

const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;
const {
  coloursByPopularity: [teslaTopColour]
} = tesla;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  coloursByPopularity: [hondaTopColour]
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
