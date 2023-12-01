interface IConfigurationIconProps {
  fill?: string;
}

const ConfigurationIcon: React.FC<IConfigurationIconProps> = ({
  fill = "#C6C6C6",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="24"
      viewBox="0 0 27 24"
      fill="none"
    >
      <rect
        opacity="0.01"
        y="0.121033"
        width="26.2727"
        height="22.9215"
        fill={fill}
      />
      <ellipse
        cx="13.1367"
        cy="11.5818"
        rx="1.64205"
        ry="1.43259"
        fill={fill}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.098 7.57054L23.9629 9.9773C24.3766 11.1387 23.6596 12.3769 22.3427 12.7756L22.1238 12.8425C21.4783 13.0346 20.9828 13.4919 20.7992 14.065C20.6196 14.5986 20.7156 15.174 21.0619 15.6408L21.3465 16.0037C22.1302 16.9961 21.89 18.3495 20.7992 19.0886L18.5769 20.5403C18.0397 20.8988 17.3565 21.0477 16.6891 20.9519C16.0217 20.856 15.4293 20.5239 15.052 20.0341L14.9207 19.8718C14.5562 19.3939 13.9363 19.1127 13.2786 19.1268C12.6525 19.141 12.0714 19.4139 11.7132 19.8622L11.4614 20.1774C11.098 20.675 10.5161 21.0203 9.85221 21.1324C9.71024 21.1446 9.56725 21.1446 9.42528 21.1324C8.89482 21.138 8.3765 20.9939 7.94743 20.7218L5.68141 19.2223C4.54183 18.478 4.30247 17.0717 5.14501 16.0706C5.55069 15.548 5.64434 14.8873 5.39679 14.2942L5.33111 14.1414C5.15877 13.6046 4.70332 13.1718 4.10505 12.9762H3.92989C2.59909 12.5858 1.87651 11.3335 2.30974 10.1683L3.20739 7.68515C3.39648 7.13171 3.84054 6.67165 4.43346 6.41491C5.00276 6.159 5.66733 6.11758 6.27255 6.30031C6.93461 6.4947 7.66401 6.39102 8.22111 6.02334L8.36342 5.92783C8.86652 5.5776 9.16042 5.04721 9.16255 4.48569V4.25647C9.15642 3.04013 10.2753 2.04689 11.6694 2.03117H14.4609C15.119 2.03272 15.7494 2.263 16.2124 2.67107C16.6944 3.09873 16.9621 3.67582 16.9568 4.27557V4.54299C16.9455 5.07709 17.2259 5.58406 17.7121 5.90873L17.8326 5.98513C18.3312 6.31138 18.9813 6.40413 19.5731 6.23345L19.9453 6.12839C20.5825 5.94413 21.2781 5.99364 21.8726 6.26558C22.4671 6.53751 22.9094 7.00852 23.098 7.57054ZM9.59649 12.861C10.1895 14.1101 11.5866 14.9245 13.1363 14.9245C15.2523 14.9245 16.9677 13.4279 16.9677 11.5818C16.9677 10.2298 16.0342 9.01093 14.6025 8.49354C13.1708 7.97615 11.5228 8.26214 10.427 9.21815C9.33126 10.1742 9.00346 11.6119 9.59649 12.861Z"
        fill={fill}
      />
    </svg>
  );
};

export default ConfigurationIcon;
