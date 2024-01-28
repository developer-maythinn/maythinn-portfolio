export const circleStyles = (width, height, bgColor, blur, position) => {
  return {
    width,
    height,
    borderRadius: "50%",
    background: bgColor,
    filter: blur,
    position: "absolute",
    ...position,
  };
};
export const bgImageStyles = (width, height, bgColor, position) => {
  return {
    width,
    height,
    // borderRadius: "50%",
    background: bgColor,
    // filter: "blur(120px)",
    position: "absolute",
    ...position,
  };
};
