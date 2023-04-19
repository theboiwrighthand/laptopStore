
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

BreadcrumsItem.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  custom: PropTypes.string,
};

function BreadcrumsItem({
  to,
  custom,
  href,
  children,
  className = "",
  onClick,
  icon,
  ...propsAdd
}) {
  let Component = "span";

  const props = {
    onClick,
    ...propsAdd,
  };

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = "a";
  }

  return (
    <Component className={className} {...props}>
      {icon && <span className={custom}>{icon}</span>}
      <span className={custom}>{children}</span>
    </Component>
  );
}

export default BreadcrumsItem;
