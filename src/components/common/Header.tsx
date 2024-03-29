import Image from 'next/image';
import arrow_back from '@/assets/icons/arrow_back.svg';
import logo from '@/assets/icons/logo.svg';
import { useRouter } from 'next/router';
import Link from 'next/link';
import FeedbackButton from './FeedbackButton';

FeedbackButton;
interface HeaderProps {
  title?: string;
}

function Header(props: HeaderProps) {
  const { title = '' } = props;
  const router = useRouter();
  const showBackButton = router.pathname !== '/';

  return (
    <header className="flex h-14 cursor-pointer items-center justify-between px-4">
      <button id="back" aria-label="Header Left" className="relative h-6 w-6">
        {showBackButton && (
          <Image
            src={arrow_back}
            alt="back"
            fill
            onClick={() => router.back()}
          />
        )}
      </button>

      {title && title !== '역없음' ? (
        <h1 className="text-system2_bold font-system2_bold text-BLUE_600">
          {title}
        </h1>
      ) : (
        <Link href="/" className="relative h-[13px] w-[105px]">
          <Image src={logo} alt="wokat_logo" fill />
        </Link>
      )}

      <FeedbackButton />
    </header>
  );
}

export default Header;
