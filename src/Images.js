import { Svg, Polygon, Path, Line } from "@react-pdf/renderer";

export const Water = () => (
  <Svg width="10" height="10" viewBox="0 0 80 85">
    <Polygon points="0,0 40,60 40,0" fill="black"/>
    <Polygon points="40,0 80,0 40,60" fill="white"/>
    <Path d="M 0,0 L 80,0 L 40,60 Z M 40,0 L 40,60" stroke="black" strokeWidth="3" fill="none"/>
    <Line x1="10" y1="70" x2="70" y2="70" stroke="black" strokeWidth="4"/>
    <Line x1="25" y1="80" x2="55" y2="80" stroke="black" strokeWidth="4"/>
  </Svg>
);

export const Drill = () => (
  <Svg width="30" height="30" viewBox="0 0 9.07 48">
    <Polygon fill="#111" points="0,0 9.07,0 9.07,36 7.6,40 6,43 4.54,44 3.07,43 1.47,40 0,36" />
    <Polygon fill="#fff" points="0,8 9.07,12 9.07,15 0,11" />
    <Polygon fill="#fff" points="0,20 9.07,24 9.07,27 0,23" />
    <Polygon fill="#fff" points="0,32 9.07,36 9.07,39 0,35" />
  </Svg>
);

