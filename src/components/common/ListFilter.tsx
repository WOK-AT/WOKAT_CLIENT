import check from '@/assets/icons/check.svg';
import Image from 'next/image';
import Modal from './Modal';

export const filterOptions = ['거리 가까운 순', '인기 많은 순'];

interface ListFilterProps {
  currentOption: string;
  onChange: (args: string) => void;
}

interface ListFilterTriggerProps {
  currentOption: string;
}

interface ListFilterContentProps {
  content: string;
  currentOption: string;
  onChange?: (arg: string) => void;
}

function ListFilter(props: ListFilterProps) {
  const { currentOption, onChange } = props;

  return (
    <Modal onChange={onChange}>
      <Modal.Trigger
        asChild={<ListFilterTrigger currentOption={currentOption} />}
      />
      <Modal.Menu>
        <h1 className="mb-[10px] text-system3_bold font-system3_bold text-GRAY_900">
          {currentOption}
        </h1>
        {filterOptions.map((option) => (
          <Modal.Contents
            key={option}
            value={option}
            asChild={
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
    <div className="mb-5 flex justify-end">
      <p className="text-system5_medium font-system5_medium text-GRAY_400">
        {currentOption} {'▼'}
      </p>
    </div>
  );
}

function ListFilterContent(props: ListFilterContentProps) {
  const { content, currentOption, onChange } = props;

  return (
    <div
      onClick={() => onChange && onChange(content)}
      className="relative mt-[14px] flex h-full w-full justify-between border-b-[1px] border-GRAY_100 pb-[14px]  text-system4_medium font-system4_medium"
    >
      <p
        className={`${
          currentOption === content ? 'text-BLUE_500' : 'text-GRAY_800'
        }`}
      >
        {content}
      </p>
      {currentOption === content && (
        <Image src={check} alt="check icon" className="h-6 w-6" />
      )}
    </div>
  );
}

export default ListFilter;
