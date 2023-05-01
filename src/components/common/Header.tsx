import Image from 'next/image';
import arrow_back from '@/assets/icons/arrow_back.svg';
import logo from '@/assets/icons/logo.svg';

interface HeaderProps {
  title?: string;
  right?: string;
}

function Header(props: HeaderProps) {
  const { title, right } = props;

  return (
    <header className="flex items-center justify-between px-4 cursor-pointer h-14">
      <button className="relative w-6 h-6">
        <Image src={arrow_back} alt="back" fill />
      </button>

      {title ? (
        <h1 className="text-BLUE_500 font-system2_bold">{title}</h1>
      ) : (
        <div className="relative w-[105px] h-[13px]">
          <Image src={logo} alt="wokat_logo" fill />
        </div>
      )}

      <button className="relative w-6 h-6">
        {right && <Image src={right} alt="right_icon" fill />}
      </button>
    </header>
  );
}

export default Header;
