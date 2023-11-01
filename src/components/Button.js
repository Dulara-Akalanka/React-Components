import className from 'classnames';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border',
    {
      'border-blue-500 bg-blue-500 text-white': primary, // primary == true
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = { // custom prop validation then no need to import
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +     // Number(true) =>1
      Number(!!secondary) +   // Number(undefined) =>NaN
      Number(!!warning) +     //Number(!!undefined) =>0
      Number(!!success) +     //!!undefined => false
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;

/*
  npm install prop-types
  import PropTypes from 'prop-types' 
  a library used to validate props that are passing

  function Card((title, showImage)) {}
  
  Card.PropTypes = {
    title: PropTypes.string.isRequired
    showImage:PropTypes.bool
  }
 
  npm install classnames

*/ 