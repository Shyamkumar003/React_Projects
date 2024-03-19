import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  users: [],
  isError: false,
};

export const fetchUsers = createAsyncThunk("FetchUsers", async () => {
  // alert("reducer")
  let response = await fetch("https://fakestoreapi.com/users");
  let data = await response.json();
  return data;
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      });
      builder.addCase(fetchUsers.rejected, (state, action) => {
        state.isError = true;
      });
  },
});

// export const {} = usersSlice.actions;
export default usersSlice.reducer;
