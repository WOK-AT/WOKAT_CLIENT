import { useBoolean } from '@/hooks/useBoolean';
import {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  cloneElement,
  createContext,
  useContext,
} from 'react';

interface ModalProviderProps {
  onChange: (args: any) => void;
}

interface ModalContext {
  isOpen: boolean;
  onChange: (args: any) => void;
  open: () => void;
  close: () => void;
}
interface TriggerProps {
  asChild: ReactNode;
}

interface ContentsProps {
  asChild: ReactElement;
  value?: string;
}

export const ModalContext = createContext<ModalContext>({
  isOpen: false,
  onChange: (args: any) => {},
  open: () => {},
  close: () => {},
});

ModalContext.displayName = 'Modal';

export default function Modal(props: PropsWithChildren<ModalProviderProps>) {
  const { children, onChange } = props;
  const [isOpen, open, close] = useBoolean(false);

  return (
    <ModalContext.Provider value={{ isOpen, onChange, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.Backdrop = function Backdrop() {
  const { close } = useContext(ModalContext);

  return (
    <div
      className="fixed left-0 top-0  z-20 h-full w-full bg-[rgba(0,0,0,0.5)]"
      onClick={close}
    ></div>
  );
};

Modal.Menu = function Contents(props: PropsWithChildren) {
  const { children } = props;
  const { isOpen, close } = useContext(ModalContext);

  return (
    <>
      {isOpen && (
        <>
          <Modal.Backdrop />
          <div className="fixed left-1/2 top-1/2 z-20 flex  w-[275px] translate-x-[-50%] translate-y-[-50%] flex-col  rounded-[10px] bg-WHTIE p-5">
            {children}
            <button
              type="button"
              onClick={close}
              className="mt-[10px] flex w-full items-center justify-end text-system4_medium font-system4_medium text-GRAY_600"
              id="click_free_meetingroom_cancel"
            >
              취소
            </button>
          </div>
        </>
      )}
    </>
  );
};

Modal.Trigger = function Trigger(props: TriggerProps) {
  const { asChild } = props;
  const { open } = useContext(ModalContext);

  return <div onClick={open}>{asChild}</div>;
};

Modal.Contents = function Contents(props: PropsWithChildren<ContentsProps>) {
  const { asChild, children } = props;
  const { onChange: select, close } = useContext(ModalContext);

  const onChange = (value: string) => {
    select(value);
    close();
  };

  return cloneElement(asChild, { onChange }, children);
};
