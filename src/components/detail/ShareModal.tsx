import { ReactNode, useContext } from 'react';
import Image from 'next/image';
import Modal, { ModalContext } from '../common/Modal';
import paste from '@/assets/icons/paste.svg';
import share from '@/assets/icons/share.svg';
import { useRouter } from 'next/router';

const LINK = 'https://wokat-client.vercel.app/';

const shareModalContents = {
  kakaoShare: {
    text: '카카오톡 공유하기',
    element: <KakaoShareButton />,
  },
  urlCopy: {
    text: 'URL 복사하기',
    element: <URLCopy />,
  },
};

function ShareModal() {
  const router = useRouter();
  const { element: kakaoShareButton } = shareModalContents['kakaoShare'];
  const { element: urlCopyButton } = shareModalContents['urlCopy'];

  const shareWithKakao = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'WOKAT',
        description: '일과 함께 워캣으로 떠나요!',
        imageUrl: `${process.env.NEXT_PUBLIC_DOMAIN}/thumbnail.png`,
        link: {
          webUrl: LINK,
          mobileWebUrl: LINK,
        },
      },
      buttonTitle: '워캣 바로가기',
      installTalk: true,
      serverCallbackArgs: {
        key: 'value',
      },
    });
  };

  const onChange = (type: keyof typeof shareModalContents) => {
    switch (type) {
      case 'kakaoShare':
        shareWithKakao();
        break;
      case 'urlCopy':
        navigator.clipboard.writeText(
          `${process.env.NEXT_PUBLIC_DOMAIN}${router.asPath}`,
        );
        break;
    }
  };

  return (
    <Modal onChange={onChange}>
      <Modal.Trigger
        asChild={
          <Image src={share} alt="share" className="mr-2.5 cursor-pointer" />
        }
      />
      <Modal.Menu>
        <h1 className="mb-[10px] font-system3_bold text-system3_bold text-GRAY_900">
          공유하기
        </h1>
        <Modal.Contents asChild={kakaoShareButton} />
        <Modal.Contents asChild={urlCopyButton} />
      </Modal.Menu>
    </Modal>
  );
}

function KakaoShareButton() {
  const { text } = shareModalContents['kakaoShare'];
  const { onChange } = useContext(ModalContext);

  return (
    <button
      onClick={() => onChange('kakaoShare')}
      className="mt-[10px] flex h-12 w-full items-center justify-between rounded-[30px] bg-[#FEE500] px-[18px] font-system4_medium text-system4_medium text-GRAY_800"
    >
      {text} <div className="w-6 h-6 rounded-full bg-GRAY_800"></div>
    </button>
  );
}
function URLCopy() {
  const { text } = shareModalContents['urlCopy'];
  const { onChange } = useContext(ModalContext);

  return (
    <div
      className="border-b-[1px] border-GRAY_100 pb-4"
      onClick={() => onChange('urlCopy')}
    >
      <button className="relative mt-[10px]  flex h-12 w-full items-center justify-between rounded-[30px] bg-BLUE_400 px-[18px] font-system4_medium text-system4_medium text-WHTIE">
        {text}
        <Image src={paste} alt="paste url" width={24} height={24} />
      </button>
    </div>
  );
}

export default ShareModal;
