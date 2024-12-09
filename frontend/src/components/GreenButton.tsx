interface GreenButtonProps {
  children: string;
  onClick?: () => void;
  customClass?: string;
}

const GreenButton: React.FunctionComponent<GreenButtonProps> = ({
  children,
  onClick,
  customClass,
}) => {
  return (
    <button
      className={
        "rounded border-[2px] border-green bg-green p-[8px] text-primary-dark hover:bg-primary-dark hover:text-green " +
        customClass
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GreenButton;
