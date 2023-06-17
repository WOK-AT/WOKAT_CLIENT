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
  const showBackButton = router.pathname !== '/';

  return (
    <header className="flex h-[62px] cursor-pointer items-center justify-between px-4">
      <button id="back" aria-label="Header Left" className="relative w-6 h-6">
        {showBackButton && (
          <Image
            src={arrow_back}
            alt="back"
            fill
            onClick={() => router.back()}
          />
        )}
      </button>

      {title ? (
        <h1 className="text-system2_bold font-system2_bold text-BLUE_600">
          {title}
        </h1>
      ) : (
        <div className="relative h-[13px] w-[105px]">
          <Image src={logo} alt="wokat_logo" fill />
        </div>
      )}

      <button
        id="profile"
        aria-label="Header Right"
        className="relative w-6 h-6"
      >
        {right && <Image src={right} alt="right_icon" fill />}
      </button>
    </header>
  );
}

export default Header;
