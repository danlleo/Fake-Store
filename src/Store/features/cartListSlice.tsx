import { createSlice } from '@reduxjs/toolkit'

interface ICartItem {
  title: string
  image: string
  price: number
  id: number
  quantity: number
}

interface ICartList {
  entities: ICartItem[]
  price: number
}

interface IReduce {
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
    removeFromCart: (state, action) => {
      state.entities = state.entities.filter(
        (item) => item.id != action.payload
      )
    },
    getTotalPrice: (state) => {
      state.price = state.entities.reduce(
        (sum: number, { price }: IReduce) => sum + price,
        0
      )
    },
  },
})

export const { addToCart, getTotalPrice, removeFromCart } =
  cartListSlice.actions

export default cartListSlice.reducer
