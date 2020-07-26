
const initialState = {

  effected: false,
  value: 0,
};

const effect = ({store}) => {

  const {

    state,
    setState,
  
  } = store;

  state.effected = true;

  setState(
    {
      ...state,
    },
  );
};

const update = ({store}, event) => {

  const {

    state,
    setState,
  
  } = store;

  const {

    obj,
  
  } = event;

  const {

    name,
  
  } = obj;

  switch (name) {

    case 'yourKey':

      ++ state.value;

      break;
        
    default:

      return;
  }

  setState(
    {
      ...state,
    },
  );
};

export default {

  initialState,
  effect,
  update,
};
