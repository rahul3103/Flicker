import PropTypes from 'prop-types';

const Icon = ({
  width,
  height,
  color,
  title,
  onClick,
  className,
  path,
  size
}) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 32 32"
    onClick={onClick}
    className={className}
  >
    <title>{title}</title>
    <path d={path} fill={color} />
  </svg>
);

export default Icon;

Icon.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Icon.defaultProps = {
  color: 'black',
  size: '24px',
  className: '',
  width: '24px',
  height: '24px',
  onClick: () => {}
};
