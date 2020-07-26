
function Symb(props) {

  const {

    React,
    onClick,
    value,

  } = props;

  return (

    <button
      onClick={onClick}
    >
      {value}
    </button>
  );
}

Symb.emits = [
  {
    key: 'onClick',
    obj: {
      name: 'yourKey',
    },
  },
];

Symb.flows = [
  {
    get: state => state.value,
    key: 'value',
    up: true,
  },
];

export default Symb;
