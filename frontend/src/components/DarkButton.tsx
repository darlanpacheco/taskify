interface DarkButtonProps {
  children: string;
  onClick?: () => void;
  customClass?: string;
}

const DarkButton: React.FunctionComponent<DarkButtonProps> = ({
  children,
  onClick,
  customClass,
}) => {
  return (
    <button
      className={
        "rounded border-[2px] border-primary-dark bg-primary-dark p-[8px] text-white hover:bg-white hover:text-primary-dark " +
        customClass
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default DarkButton;
