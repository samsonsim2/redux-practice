import { createSlice } from "@reduxjs/toolkit";

const cocktailSlice = createSlice({
  name: "cocktail",

  initialState: {
    cocktails: ["sad"],
    isLoading: false,
  },

  reducers: {
    getCocktailsFetch: (state) => {
      state.isLoading = true;
      console.log("hihi from state")
     
    },

    getCocktailsSuccess: (state, action) => {
      state.isLoading = false;
      state.cocktails = action.payload;
       
    },

    getCocktailsFail: (state) => {
      state.isLoading = false;
    },
  },
});

export const {getCocktailsFetch,getCocktailsSuccess,getCocktailsFail} = cocktailSlice.actions;
export default cocktailSlice.reducer;



 
