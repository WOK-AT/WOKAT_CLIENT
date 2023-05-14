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

interface BackdropProps {
  onClick: () => void;
}

interface TriggerProps {
  as: ReactNode;
}

interface ContentsProps {
  as: ReactElement;
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
  const { isOpen, open, close } = useBoolean(false);

  return (
    <ModalContext.Provider value={{ isOpen, onChange, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.Backdrop = function Backdrop(props: BackdropProps) {
  const { onClick } = props;

  return (
    <div
      className="fixed left-0 top-0  z-10 h-full w-full bg-[rgba(0,0,0,0.5)]"
      onClick={onClick}
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
          <Modal.Backdrop onClick={close} />
          <div className="fixed left-1/2 top-1/2 z-10 flex  w-[275px] translate-x-[-50%] translate-y-[-50%] flex-col  rounded-[10px] bg-WHTIE p-5">
            {children}
            <button
              type="button"
              onClick={close}
              className="mt-[10px] flex w-full items-center justify-end font-system4_medium text-system4_medium text-GRAY_600"
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
  const { as } = props;
  const { open } = useContext(ModalContext);

  return <div onClick={open}>{as}</div>;
};

Modal.Contents = function Contents(props: PropsWithChildren<ContentsProps>) {
  const { as, children, value } = props;
  const { onChange: select, close } = useContext(ModalContext);

  const onChange = () => {
    select(value);
    close();
  };

  return cloneElement(as, { onChange }, children);
};
