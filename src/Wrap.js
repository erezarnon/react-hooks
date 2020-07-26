
function Wrap(tools, props) {

  const {

    React,
    Unit,
    wraps,
    context,
    handler,
    useStyles,
    utils,
  
  } = tools;

  const {

    flows = [],
    emits = [],
    views = [],
    defaultProps,

  } = Unit;

  const contextValue = React.useContext(context);
  const memoizedProps = [];
  const totalViewProps = {

    ...defaultProps,
    ...props,

    React,
  };

  const flowsForEach = utils.bind(utils.fForEach, 
    {
      contextValue,
      memoizedProps,
      totalViewProps,
    },
  );

  const emitsForEach = utils.bind(utils.eForEach, 
    {
      totalViewProps,
      handler,
    },
  );

  const viewsForEach = utils.bind(utils.vForEach, 
    {
      totalViewProps,
      wraps,
    },
  );

  flows.forEach(flowsForEach);
  emits.forEach(emitsForEach);
  views.forEach(viewsForEach);

  totalViewProps.classes = useStyles(totalViewProps);

  const viewRender = utils.bind(utils.render,
    {
      Unit,
      React,
      props: totalViewProps,
    },
  );

  return React.useMemo(viewRender, memoizedProps);
}

export default Wrap;
