import Image from 'next/image';
import feedback from '@/assets/icons/feedback.svg';
import feedbackInfoText from '@/assets/icons/feedbackInfoText.svg';
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
          className="absolute right-[6px] top-[34px]"
          src={feedbackInfoText}
          alt="feedbackInfoText_icon"
          layout="fixed"
        />
      )}
    </section>
  );
}

export default FeedbackButton;
