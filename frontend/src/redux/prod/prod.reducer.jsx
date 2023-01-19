import { ADD_ERROR, PROD_GET } from "./prod.type";
const initialState = {
  data: [],
  error: false,
};

export const prodreducer = (state = initialState, { type, payload }) => {
//   console.log(payload);

  switch (type) {
    case PROD_GET: {
      return { ...state, data: payload };
    }

    case ADD_ERROR: {
      return { ...state, error: true };
    }

    default: {
      return state;
    }
  }
};
