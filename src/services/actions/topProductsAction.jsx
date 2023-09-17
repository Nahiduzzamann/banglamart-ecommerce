import axios from "axios";

export const FETCH_TOP_PRODUCTS_REQUEST = "FETCH_TOP_PRODUCTS_REQUEST";
export const FETCH_TOP_PRODUCTS_SUCCESS = "FETCH_TOP_PRODUCTS_SUCCESS";
export const FETCH_TOP_PRODUCTS_FAILURE = "FETCH_TOP_PRODUCTS_FAILURE";

export const fetchTopProductsRequest = () => ({
  type: FETCH_TOP_PRODUCTS_REQUEST,
});

export const fetchTopProductsSuccess = (topProduct) => ({
  type: FETCH_TOP_PRODUCTS_SUCCESS,
  payload: topProduct,
});

export const fetchTopProductsFailure = (error) => ({
  type: FETCH_TOP_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchTopProducts = () => {
  return (dispatch) => {
    dispatch(fetchTopProductsRequest());
    axios
      .get("http://62.72.31.204:1300/product/get/top")
      .then((response) => {
        const topProduct = response.data;
        dispatch(fetchTopProductsSuccess(topProduct));
      })
      .catch((error) => {
        dispatch(fetchTopProductsFailure(error.message));
      });
  };
};
