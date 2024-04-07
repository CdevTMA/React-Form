import { combineReducers } from 'redux';
import { QuanLySinhVienReducer } from './QuanLySinhVienReducer';


export const rootReducer = combineReducers({
    // nơi  chứa các reducer cho nghiệp vụ (store con)
    QuanLySinhVienReducer,
});
