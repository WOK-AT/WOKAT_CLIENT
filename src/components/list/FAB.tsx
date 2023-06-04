import map from '@/assets/icons/fab_map.svg';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

function FAB() {
  const router = useRouter();
  const station = router.query.title;

  return (
    <Link href={`nearby-place/${station}역`}>
      <button className="fixed bottom-5 right-4 flex h-14 w-14 translate-x-0 translate-y-0 items-center justify-center rounded-full bg-BLUE_500 shadow-[inset_1px_1px_1px_rgba(255,255,255,0.25)] drop-shadow-[4px_4px_20px_rgba(0,0,0,0.15)] active:scale-95 active:bg-BLUE_600">
        <div className="relative h-8 w-8">
          <Image src={map} alt="fab map icon" fill priority />
        </div>
      </button>
    </Link>
  );
}

export default FAB;
