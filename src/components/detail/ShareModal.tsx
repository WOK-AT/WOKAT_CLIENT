import Image from 'next/image';
import Modal from '../common/Modal';
import paste from '@/assets/icons/paste.svg';
import share from '@/assets/icons/share.svg';
import { useRouter } from 'next/router';
import { ToastContext } from '@/context/ToastContext';
import { useContext } from 'react';

interface ModalContentsProps {
  onChange?: (args: Function) => void;
}

function ShareModal() {
  const onChange = (cb: Function) => {
    cb();
  };

  return (
    <Modal onChange={onChange}>
      <Modal.Trigger
        asChild={
          <Image src={share} alt="share" className="mr-2.5 cursor-pointer" />
        }
      />
      <Modal.Menu>
        <h1 className="mb-[10px] text-system3_bold font-system3_bold text-GRAY_900">
          공유하기
        </h1>
        <Modal.Contents asChild={<KakaoShareButton />} />
        <Modal.Contents asChild={<URLCopy />} />
      </Modal.Menu>
    </Modal>
  );
}

function KakaoShareButton(props: ModalContentsProps) {
  const { onChange } = props;

  const shareWithKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'text',
      text: '일과 함께 워캣으로 떠나요!',
      link: {
        webUrl: process.env.NEXT_PUBLIC_DOMAIN,
        mobileWebUrl: process.env.NEXT_PUBLIC_DOMAIN,
      },
      buttonTitle: '워캣 바로가기',
      installTalk: true,
    });
  };

  return (
    <button
      className="mt-[10px] flex h-12 w-full items-center justify-between rounded-[30px] bg-[#FEE500] px-[18px] text-system4_medium font-system4_medium text-GRAY_800"
      onClick={() => onChange && onChange(shareWithKakao)}
    >
      카카오톡 공유하기 <div className="h-6 w-6 rounded-full bg-GRAY_800"></div>
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
    <div
      className="border-b-[1px] border-GRAY_100 pb-4"
      onClick={() => onChange && onChange(urlCopy)}
    >
      <button className="relative mt-[10px]  flex h-12 w-full items-center justify-between rounded-[30px] bg-BLUE_400 px-[18px] text-system4_medium font-system4_medium text-WHTIE">
        URL 복사하기
        <Image src={paste} alt="paste url" width={24} height={24} />
      </button>
    </div>
  );
}

export default ShareModal;
