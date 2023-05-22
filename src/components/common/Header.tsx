import Image from 'next/image';
import arrow_back from '@/assets/icons/arrow_back.svg';
import logo from '@/assets/icons/logo.svg';
import { useRouter } from 'next/router';

interface HeaderProps {
  title?: string;
  right?: string;
}

function Header(props: HeaderProps) {
  const { title = '', right } = props;
  const router = useRouter();

  return (
    <header className="flex h-14 cursor-pointer items-center justify-between px-4">
      <button className="relative h-6 w-6" onClick={() => router.back()}>
        <Image src={arrow_back} alt="back" fill />
      </button>

      {title ? (
        <h1 className="font-system2_bold text-system2_bold text-BLUE_600">
          {title}
        </h1>
      ) : (
        <div className="relative h-[13px] w-[105px]">
          <Image src={logo} alt="wokat_logo" fill />
        </div>
      )}

      <button className="relative h-6 w-6">
        {right && <Image src={right} alt="right_icon" fill />}
      </button>
    </header>
  );
}

export default Header;
