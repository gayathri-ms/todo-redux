import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const todoSlice = createSlice({
  name: 'todos',
  initialState : [],
  reducers: {
    addtodo: (state , action) => {
      state.push(action.payload);

    },

    deltodo: (state , action) => {
      return state.filter((val) => {
        return val.id !== action.payload
      })
    },

    updatetodo: (state , action) => {
       state.map((val) => {
        if( val.id === action.payload.id )
          { 
            val.isEdit = !action.payload.isEdit;
            val.todoname = action.payload.todoname;
            val.description = action.payload.description;
            val.category = action.payload.category;
          }
      })
    },

    isEdit: (state , action) => {
       state.map((val) => {
        if(val.id === action.payload.id)
        {
          val.isEdit = !action.payload.isEdit
        }
      })
    }

  },
  
});

export const { addtodo , deltodo , updatetodo , isEdit} = todoSlice.actions;


export default todoSlice.reducer;
