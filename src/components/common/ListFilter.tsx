import { useFilter } from '@/hooks/useFilter';
import check from '@/assets/icons/check.svg';
import Image from 'next/image';
import Modal, { ModalContext } from './Modal';
import { useContext } from 'react';

const filterOptions = ['거리 가까운 순', '인기 많은 순'];

interface ListFilterTriggerProps {
  currentOption: string;
}

interface ListFilterContentProps {
  content: string;
  currentOption: string;
}

function ListFilter() {
  const { currentOption, changeOption } = useFilter(filterOptions[0]);

  return (
    <Modal onChange={changeOption}>
      <Modal.Trigger as={<ListFilterTrigger currentOption={currentOption} />} />
      <Modal.Menu>
        <h1 className="mb-[10px] font-system3_bold text-system3_bold text-GRAY_900">
          {currentOption}
        </h1>
        {filterOptions.map((option) => (
          <Modal.Contents
            key={option}
            as={
              <ListFilterContent
                content={option}
                currentOption={currentOption}
              />
            }
          >
            {option}
          </Modal.Contents>
        ))}
      </Modal.Menu>
    </Modal>
  );
}

function ListFilterTrigger(props: ListFilterTriggerProps) {
  const { currentOption } = props;

  return (
    <div className="flex justify-end mb-5">
      <p className="font-system5_medium text-system5_medium text-GRAY_400">
        {currentOption} {'▼'}
      </p>
    </div>
  );
}

function ListFilterContent(props: ListFilterContentProps) {
  const { content, currentOption } = props;
  const { onChange, close } = useContext(ModalContext);

  const onClick = () => {
    onChange(content);
    close();
  };

  return (
    <div
      onClick={onClick}
      className="relative mt-[14px] flex h-full w-full justify-between border-b-[1px] border-GRAY_100 pb-[14px]  font-system4_medium text-system4_medium"
    >
      <p
        className={`${
          currentOption === content ? 'text-BLUE_500' : 'text-GRAY_800'
        }`}
      >
        {content}
      </p>
      {currentOption === content && (
        <Image src={check} alt="check icon" className="w-6 h-6" />
      )}
    </div>
  );
}

export default ListFilter;
