import Image from 'next/image';
import feedback from '@/assets/icons/feedback.svg';
import feedbackInfoText from '@/assets/images/feedbackInfoText.webp';
import { useRouter } from 'next/router';

function FeedbackButton() {
  const router = useRouter();
  const feedbackURL = 'https://walla.my/WOKAT';

  return (
    <section>
      <button
        id="profile"
        aria-label="Header Right"
        className="relative h-6 w-6"
        onClick={() => window.open(feedbackURL)}
      >
        <Image src={feedback} alt="feedback_icon" fill />
      </button>
      {router.pathname === '/' && (
        <Image
          className="absolute right-[8px] top-[37px]"
          src={feedbackInfoText}
          alt="feedbackInfoText_icon"
          width={139}
          height={36}
        />
      )}
    </section>
  );
}

export default FeedbackButton;
