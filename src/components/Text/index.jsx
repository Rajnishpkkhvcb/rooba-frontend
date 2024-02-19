import React from "react";

const sizeClasses = {
  txtSwitzerRegular10: "font-normal font-switzer",
  txtSwitzerSemibold16Gray100: "font-semibold font-switzer",
  txtSwitzerRegular14Gray9007f: "font-normal font-switzer",
  txtSwitzerRegular12: "font-normal font-switzer",
  txtSwitzerMedium12WhiteA700: "font-medium font-switzer",
  txtIvyPrestoDisplayThin48: "font-hairline font-ivyprestodisplay",
  txtSwitzerMedium14WhiteA70066: "font-medium font-switzer",
  txtSwitzerRegular14: "font-normal font-switzer",
  txtSwitzerRegular16: "font-normal font-switzer",
  txtIvyPrestoDisplayThin64Gray90002: "font-hairline font-ivyprestodisplay",
  txtSwitzerSemibold20: "font-semibold font-switzer",
  txtSwitzerRegular10WhiteA700: "font-normal font-switzer",
  txtSwitzerMedium16: "font-medium font-switzer",
  txtSwitzerRegular14Gray90001: "font-normal font-switzer",
  txtSwitzerRegular14Black90033: "font-normal font-switzer",
  txtSwitzerMedium36: "font-medium font-switzer",
  txtSwitzerMedium14: "font-medium font-switzer",
  txtIvyPrestoDisplayThin64: "font-hairline font-ivyprestodisplay",
  txtSwitzerSemibold16: "font-semibold font-switzer",
  txtSwitzerMedium20: "font-medium font-switzer",
  txtSwitzerRegular16Gray100bf: "font-normal font-switzer",
  txtSwitzerMedium16WhiteA700: "font-medium font-switzer",
  txtSpaceGroteskLight32: "font-light font-spacegrotesk",
  txtSwitzerExtralight36: "font-switzer font-thin",
  txtSwitzerMedium14Black900: "font-medium font-switzer",
  txtSwitzerRegular10Gray90001: "font-normal font-switzer",
  txtSwitzerMedium14WhiteA700: "font-medium font-switzer",
  txtSwitzerSemibold32: "font-semibold font-switzer",
  txtSwitzerRegular14Black900: "font-normal font-switzer",
  txtIvyPrestoDisplayThin54: "font-hairline font-ivyprestodisplay",
  txtSwitzerMedium12: "font-medium font-switzer",
  txtSwitzerMedium10: "font-medium font-switzer",
  txtIvyPrestoDisplayLight32: "font-ivyprestodisplay font-light",
  txtIvyPrestoDisplayLightItalic64: "font-ivyprestodisplay font-light italic",
  txtAbelRegular24: "font-abel font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
