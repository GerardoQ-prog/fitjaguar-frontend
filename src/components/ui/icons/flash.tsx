interface IFlashIconProps {
  fill?: string;
}

const FlashIcon: React.FC<IFlashIconProps> = ({ fill = "#C6C6C6" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
    >
      <rect
        opacity="0.01"
        y="0.183594"
        width="26.2727"
        height="25.2885"
        fill={fill}
      />
      <path
        d="M12.1624 24.4184C12.0355 24.4183 11.9095 24.3969 11.7902 24.3552C11.3165 24.1883 11.0227 23.7314 11.0786 23.2488L11.9216 15.7782H5.47379C5.06852 15.7788 4.69608 15.5638 4.50572 15.2194C4.31536 14.875 4.33824 14.4576 4.56519 14.1344L13.2024 1.70091C13.4834 1.30057 14.0113 1.13553 14.4832 1.30051C14.9358 1.46226 15.2249 1.89036 15.1947 2.3542L14.3518 9.87753H20.7996C21.2048 9.87694 21.5773 10.0919 21.7676 10.4363C21.958 10.7807 21.9351 11.1981 21.7082 11.5213L13.071 23.9548C12.8671 24.2452 12.5265 24.419 12.1624 24.4184Z"
        fill={fill}
      />
    </svg>
  );
};

export default FlashIcon;
