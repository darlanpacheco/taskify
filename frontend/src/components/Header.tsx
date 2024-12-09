import WhiteButton from "./WhiteButton";
import TextButton from "./TextButton";

export default function Header() {
  return (
    <header className="flex h-[64px] items-center justify-center bg-primary-dark text-white">
      <div className="absolute left-[16px]">
        <TextButton customClass="text-[2rem]">Taskify</TextButton>
      </div>
      <div>
        <TextButton>Home</TextButton>
        <TextButton>Features</TextButton>
      </div>
      <div className="absolute right-[16px] text-primary-dark">
        <WhiteButton customClass="mr-[16px]">Log In</WhiteButton>
        <WhiteButton>Sign Up</WhiteButton>
      </div>
    </header>
  );
}
