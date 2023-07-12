import Image from 'next/image';

interface DetailInformationTitleProps {
  icon: string;
  title: string;
}
function DetailInformationTitle({ icon, title }: DetailInformationTitleProps) {
  return (
    <article className=" mb-3.5 flex flex-row items-center text-system3_bold font-system3_bold text-GRAY_600">
      <Image src={icon} alt={`${title} icon`} className="mr-2" />
      <h1>{title}</h1>
    </article>
  );
}

export default DetailInformationTitle;
