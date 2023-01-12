import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./features/CounterSlice";
import todoSlicer from "./features/todoSlicer";

export const store = configureStore({
    reducer: {
        counter:CounterSlice,
        todo:todoSlicer
    }
  })