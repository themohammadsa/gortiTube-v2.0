import { useEffect } from "react";
import { useToggleContext } from "../context/ToggleContext";

export const Toast = () => {
  const { toastText, toastShow, setToastShow } = useToggleContext();

  useEffect(() => {
    setTimeout(() => setToastShow(false), 5000);
  });

  return (
    <div>
      {toastShow && (
        <div className="toast-content shadow">
          {toastText}
          <span
            onClick={() => setToastShow(false)}
            className="toast-dismiss pointer"
          >
            ×
          </span>
        </div>
      )}
    </div>
  );
};
