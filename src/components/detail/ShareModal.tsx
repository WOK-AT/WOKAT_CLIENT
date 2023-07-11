import Image from 'next/image';
import Modal from '../common/Modal';
import paste from '@/assets/icons/paste.svg';
import share from '@/assets/icons/share.svg';
import kakaoTalk_logo from '@/assets/icons/kakaoTalk_logo.svg';
import { useRouter } from 'next/router';
import { ToastContext } from '@/context/ToastContext';
import { useContext } from 'react';

interface ModalContentsProps {
  onChange?: (args: Function) => void;
}

interface ShareModalProps {
  placeName: string;
  imageURL: string;
  hashtags: string[];
}

interface KakaoShareButtonProps extends ModalContentsProps {
  place: ShareModalProps;
}

function ShareModal(props: ShareModalProps) {
  const onChange = (cb: Function) => {
    cb();
  };

  return (
    <Modal onChange={onChange}>
      <Modal.Trigger
        asChild={<Image src={share} alt="share" className="cursor-pointer" />}
      />
      <Modal.Menu>
        <h1 className="mb-[10px] text-system3_bold font-system3_bold text-GRAY_900">
          공유하기
        </h1>
        <Modal.Contents asChild={<KakaoShareButton place={props} />} />
        <Modal.Contents asChild={<URLCopy />} />
      </Modal.Menu>
    </Modal>
  );
}

function KakaoShareButton(props: KakaoShareButtonProps) {
  const { onChange, place } = props;
  const router = useRouter();
  const { placeName, imageURL: imageUrl, hashtags } = place;

  const shareWithKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: placeName,
        description: hashtags.join(' '),
        imageUrl,
        link: {
          mobileWebUrl: `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`,
          webUrl: `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`,
        },
      },
      buttons: [
        {
          title: '바로가기',
          link: {
            mobileWebUrl: `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`,
            webUrl: `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`,
          },
        },
      ],
    });
  };

  return (
    <button
      className="mt-[10px] flex h-12 w-full items-center justify-between rounded-[30px] bg-[#FEE500] px-[18px] text-system4_medium font-system4_medium text-GRAY_800"
      onClick={() => onChange && onChange(shareWithKakao)}
    >
      카카오톡 공유하기
      <Image src={kakaoTalk_logo} alt="kakaoTalk logo" width={24} height={24} />
    </button>
  );
}
function URLCopy(props: ModalContentsProps) {
  const router = useRouter();
  const { onChange } = props;
  const { showToast } = useContext(ToastContext);

  const urlCopy = () => {
    navigator.clipboard.writeText(
      `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`,
    );
    showToast('클립 보드에 복사되었습니다.');
  };

  return (
    <button
      className="relative mt-[10px]  flex h-12 w-full items-center justify-between rounded-[30px] bg-BLUE_400 px-[18px] text-system4_medium font-system4_medium text-WHTIE"
      onClick={() => onChange && onChange(urlCopy)}
    >
      URL 복사하기
      <Image src={paste} alt="paste url" width={24} height={24} />
    </button>
  );
}

export default ShareModal;
