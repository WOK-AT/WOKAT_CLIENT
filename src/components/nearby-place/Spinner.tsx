import Lottie from 'lottie-react';
import spinner from '@/assets/lottie/Spinner.json';

function Spinner() {
  return (
    <div className="-ml-4 -mr-4 flex h-screen flex-col items-center justify-center">
      <div className="h-1/2">
        <Lottie animationData={spinner} style={{ height: '130px' }} />
        <p className="text-center text-system4_medium font-system4_medium text-GRAY_600">
          로딩중
        </p>
      </div>
    </div>
  );
}

export default Spinner;
