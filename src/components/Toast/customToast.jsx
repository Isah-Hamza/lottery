import { toast } from 'react-toastify';
import { CustomErrorToast, CustomSuccessToast } from '../customtoast';
import { CgClose } from 'react-icons/cg';

const customToastComponent = (msg, error = false) => {
  let id = `kllm_${Math.random()}`;

  const CloseButton = ({ closeToast }) => (
    <CgClose size={16} onClick={closeToast} className="cursor-pointer ml-auto min-w-3 " />

  );

  console.log(msg);
  if (error)
    toast(<CustomErrorToast mssg={msg} id={id}  />, {
      position: 'top-right',
      closeButton: CloseButton,
      toastId: 'so',
    });
  else
    toast(<CustomSuccessToast mssg={msg} id={id} />, {
      position: 'top-right',
      // closeButton: false,
      toastId: 'so',
      closeButton: CloseButton,
    });
};

export default customToastComponent;
