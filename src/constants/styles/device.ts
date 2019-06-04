const breakpoints = {
  mobile: "600px",
  tablet: "80.0rem"
};

export default {
  mobile: `screen and (max-width: ${breakpoints.mobile})`,
  tablet: `screen and (min-width: ${breakpoints.mobile}) and (max-width: ${
    breakpoints.tablet
  })`
};
