import React from "react";
import { useNavigation } from "react-router-dom";

const loadingStyle: React.CSSProperties = {
  opacity: 0.25,
  transition: "opacity 200ms",
  transitionDelay: 200 + "ms",
};

function useLoadingStyle() {
  const navigation = useNavigation();

  const style = navigation.state === "loading" ? loadingStyle : undefined;

  return style;
}

export default useLoadingStyle;
