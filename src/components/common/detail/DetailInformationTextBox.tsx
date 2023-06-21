import { PropsWithChildren } from 'react';

function DetailInformationTextBox({ children }: PropsWithChildren) {
  return (
    <article className="mb-3 rounded-[10px] bg-GRAY_50 px-4 py-[18px]">
      {children}
    </article>
  );
}

export default DetailInformationTextBox;
