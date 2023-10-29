import { FC } from "react";

interface IPlayIcon {
  width: string;
}

const PlayIcon: FC<IPlayIcon> = ({ width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={width}
      viewBox="0 0 35 35"
      fill="none"
    >
      <path
        d="M17.6705 31.5979C25.4996 31.5979 31.846 25.2516 31.846 17.4225C31.846 9.59341 25.4996 3.24707 17.6705 3.24707C9.84146 3.24707 3.49512 9.59341 3.49512 17.4225C3.49512 25.2516 9.84146 31.5979 17.6705 31.5979Z"
        stroke="#FEC600"
        stroke-width="1.13403"
        stroke-linejoin="round"
      />
      <path
        d="M14.8354 17.4221V12.5117L19.0881 14.9669L23.3407 17.4221L19.0881 19.8773L14.8354 22.3325V17.4221Z"
        stroke="#FEC600"
        stroke-width="1.13403"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default PlayIcon;
