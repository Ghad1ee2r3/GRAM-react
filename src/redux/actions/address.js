import {
    SET_USER_ADDRESSES, 
    UPDATE_ADDRESS, 
    DELETE_ADDRESS, 
    ADD_ADDRESS 
    } from "./actionTypes"
import instance from "./instance"

export const fetchAddresses = () => async (dispatch) => {
    try {
      const res = await instance.get("address/list/");
      const addresses = res.data;
      dispatch({ type: SET_USER_ADDRESSES, payload: addresses });
    } catch (err) {
      console.error(err);
    }
  };
  
//   //POST THE AUTHOR TO https://the-index-api.herokuapp.com/api/authors/
//   export const postAuthor = (newAuthor, closeModal) => async (dispatch) => {
//     try {
//       const res = await instance.post("/api/authors/", newAuthor);
//       const author = res.data;
//       dispatch(resetErrors());
//       dispatch({
//         type: ADD_AUTHOR,
//         payload: author,
//       });
//       closeModal();
//     } catch (err) {
//       dispatch({
//         type: SET_ERRORS,
//         payload: err.response.data,
//       });
//     }
//   };