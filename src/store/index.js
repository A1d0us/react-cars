import {configureStore} from "@reduxjs/toolkit";
import {carsReducer} from "./slices/carsSlice.js";
import {formReducer} from "./slices/formSlice.jsx";
import {addCar, deleteCar, changeSearchTerm} from "./slices/carsSlice.js";
import {changeName, changeCost} from "./slices/formSlice.jsx";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export {store, addCar, deleteCar, changeSearchTerm, changeName, changeCost};