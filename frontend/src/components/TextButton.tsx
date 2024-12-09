interface TextButtonProps {
  children: string;
  onClick?: () => void;
  customClass?: string;
}

const TextButton: React.FunctionComponent<TextButtonProps> = ({
  children,
  onClick,
  customClass,
}) => {
  return (
    <button className={"p-[8px] " + customClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default TextButton;
