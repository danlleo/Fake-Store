import { createSlice } from '@reduxjs/toolkit'

interface ICartItem {
  title: string
  image: string
  price: number
  id: number
  quantity: number
  category: string
}

interface ICartList {
  entities: ICartItem[]
  price: number
}

interface IReduce {
  quantity: number
  price: number
}

const initialState: ICartList = {
  entities: [],
  price: 0,
}

export const cartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.entities = [...state.entities, action.payload]
    },
    increase: (state, action) => {
      const index = state.entities.findIndex(
        (item) => item.id === action.payload.id
      )

      state.entities[index].quantity = action.payload.quantity
    },
    decrease: (state, action) => {
      const index = state.entities.findIndex(
        (item) => item.id === action.payload.id
      )
      state.entities[index].quantity = action.payload.quantity
    },
    removeFromCart: (state, action) => {
      state.entities = state.entities.filter(
        (item) => item.id != action.payload
      )
    },
    getTotalPrice: (state) => {
      state.price = state.entities.reduce(
        (sum: number, { quantity, price }: IReduce) => sum * quantity + price,
        0
      )
    },
  },
})

export const { addToCart, increase, decrease, getTotalPrice, removeFromCart } =
  cartListSlice.actions

export default cartListSlice.reducer
