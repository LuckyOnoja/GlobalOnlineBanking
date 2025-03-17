import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

export const Toast = () => (
  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

// Export the toast function to trigger toasts
export const showToast = (message, type = "default") => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "warning":
      // Custom warning toast with a button
      toast.warning(
        <div>
          <p>{message}</p>
        </div>
      );
      break;
    case "info":
      toast.info(message);
      break;
    default:
      toast(message);
  }
};
