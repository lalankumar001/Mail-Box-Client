import { createSlice } from '@reduxjs/toolkit'

// creating a context object that is global
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state,action) => {
      state.value -= action.payload
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload

      },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer