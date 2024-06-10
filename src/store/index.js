import {configureStore} from '@reduxjs/toolkit';
import SliceUpContent from './slideUpContent-slice';

const store = configureStore({
    reducer:{ slideUp:SliceUpContent.reducer}
})

export default store