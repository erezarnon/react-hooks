
const bind = (fn, ctx) => (...props) => fn(ctx, ...props);

const xForEach = (ctx, element) => {

  const {

    input,
    output,
    Wrap,
    ...rest

  } = ctx;

  const Unit = input[element];

  const wrap = bind(Wrap,
    {
      ...rest,
      Unit,
    },
  );

  output[element] = wrap;
};

const fForEach = (ctx, element) => {

  const {

    contextValue,
    memoizedProps,
    totalViewProps,

  } = ctx;

  const {

    get,
    key,
    up,

  } = element;

  const selector = get(contextValue);
  const value = selector;
  
  if (up) {

    memoizedProps[memoizedProps.length] = selector;
  }

  totalViewProps[key] = value;
};

const eForEach = (ctx, element) => {

  const {

    totalViewProps,
    handler,

  } = ctx;

  const {

    key,
    obj,

  } = element;

  totalViewProps[key] = bind(handler, obj);
};

const vForEach = (ctx, element) => {

  const {

    totalViewProps,
    wraps,

  } = ctx;

  const {

    key,
    name,

  } = element;

  const view = wraps[name];

  totalViewProps[key] = view;
};

const render = ({React, Unit, props}) => (

  <Unit
    {...props}
  />
);

const handle = (ctx, obj, origin) => {

  const {

    key,
    eventer,

  } = ctx;

  eventer.emit(key,
    {
      obj,
      origin,
    },
  );
};

export default {

  bind,
  xForEach,
  fForEach,
  eForEach,
  vForEach,
  render,
  handle,
};
