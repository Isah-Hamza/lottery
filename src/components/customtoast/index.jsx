import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { CgClose } from 'react-icons/cg';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { BiError } from 'react-icons/bi';
import toast_mark from '../../assets/images/toast-mark.svg';

export const CustomSuccessToast = ({ mssg, id }) => {
  const handleClose = () => {
    toast.dismiss(id);
  };

  return (
    <div className="flex gap-3 items-center relative bg-[#FCF4E8]">
      <div className="w-7">
        <img src={toast_mark} className="size-7" size={22} color={'rgb(21 128 61)'} />
      </div>
      <div className="text-base">
        <p className="text-[#E5951A] font-semibold tracking-wide">Successful!</p>
        <p className="mt-0 text-[#100C2A] text-[15px]">{mssg ? mssg : 'Operation performed successfully '}</p>
      </div>
      {/* <CgClose size={16} onClick={handleClose} className="cursor-pointer absolute ml-auto min-w-3 -right-1 top-0" /> */}
    </div>
  );
};

export const CustomErrorToast = ({ mssg, id }) => {
  const handleClose = () => {
    toast.dismiss(id);
  };
  return (
    <div className="flex gap-3 relative">
      <div className="!w-4">
        <BiError size={22} color={'coral'} />
      </div>
      <div className="text-base">
        <p className="text-[red] font-semibold tracking-wide">Failed!</p>
        <p className="mt-0 text-[15px]">{mssg ? mssg : 'An error occured '}</p>
      </div>
      {/* <CgClose size={16} onClick={handleClose} className="absolute ml-auto min-w-3 -right-1 top-0" /> */}
    </div>
  );
};

const CustomToast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2500}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick={true}
      transition={Slide}
      stacked={true}
    />
  );
};

export default CustomToast;
