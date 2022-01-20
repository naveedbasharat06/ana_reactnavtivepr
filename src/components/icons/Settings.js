import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgSettings = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}
  >
    <Path
      d="M16.148 3.541c0-.759-.616-1.374-1.375-1.374H13.19c-.76 0-1.376.615-1.376 1.374 0 .627-.429 1.164-1.013 1.394-.092.036-.184.075-.274.114-.575.25-1.259.174-1.703-.27a1.375 1.375 0 0 0-1.943 0L5.76 5.9a1.375 1.375 0 0 0 0 1.944c.444.444.52 1.127.268 1.703-.04.091-.077.182-.113.274-.23.584-.767 1.013-1.394 1.013-.759 0-1.374.616-1.374 1.375v1.584c0 .76.615 1.375 1.374 1.375.627 0 1.164.429 1.394 1.013.036.092.075.184.113.274.25.575.175 1.258-.268 1.703a1.375 1.375 0 0 0 0 1.943l1.12 1.12a1.375 1.375 0 0 0 1.943 0c.444-.444 1.127-.52 1.703-.27.09.04.182.079.274.115.584.23 1.013.767 1.013 1.394 0 .759.616 1.374 1.375 1.374h1.584c.76 0 1.375-.615 1.375-1.374 0-.627.429-1.164 1.013-1.395.092-.035.184-.073.274-.112.575-.252 1.259-.175 1.702.268a1.374 1.374 0 0 0 1.944 0l1.12-1.12a1.375 1.375 0 0 0 0-1.943c-.444-.445-.52-1.127-.27-1.703.04-.09.079-.182.115-.274.23-.584.767-1.013 1.394-1.013.759 0 1.374-.616 1.374-1.375v-1.583c0-.76-.615-1.375-1.374-1.375-.627 0-1.164-.429-1.395-1.013a8.46 8.46 0 0 0-.113-.274c-.25-.575-.174-1.258.27-1.703a1.375 1.375 0 0 0 0-1.943l-1.12-1.12a1.375 1.375 0 0 0-1.944 0c-.445.444-1.127.52-1.703.27a8.492 8.492 0 0 0-.274-.115c-.584-.231-1.013-.768-1.013-1.394Z"
      fill="#BEBEC2"
    />
    <Path
      d="M18.314 13a4.333 4.333 0 1 1-8.666 0 4.333 4.333 0 0 1 8.666 0Z"
      fill="#6F6E73"
    />
  </Svg>
);

export default SvgSettings;