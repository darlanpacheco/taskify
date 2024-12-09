interface WhiteButtonProps {
  children: string;
  onClick?: () => void;
  customClass?: string;
}

const WhiteButton: React.FunctionComponent<WhiteButtonProps> = ({
  children,
  onClick,
  customClass,
}) => {
  return (
    <button
      className={
        "rounded border-[2px] border-white bg-white p-[8px] text-primary-dark hover:bg-primary-dark hover:text-white " +
        customClass
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default WhiteButton;
