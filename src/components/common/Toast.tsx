interface ToastProps {
  message: string;
}
function Toast(props: ToastProps) {
  const { message } = props;

  return (
    <div className="fixed left-1/2 top-20 -translate-x-1/2">
      <p className="flex w-[216px] justify-center rounded-3xl bg-GRAY_600 px-4 py-2 text-system4 font-system4 text-GRAY_100">
        {message}
      </p>
    </div>
  );
}

export default Toast;
