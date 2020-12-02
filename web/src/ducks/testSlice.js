import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    pieces: null,
    ofState: null,
  },
  reducers: {
    testAction: (state, action) => {
      return {
        ...state,
        pieces: action.payload.pieces,
        ofState: action.payload.anotherThing,
      };
    },
  },
});

export const { testAction } = testSlice.actions;

export default testSlice;
