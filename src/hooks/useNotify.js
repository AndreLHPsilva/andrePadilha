import { Notify } from "notiflix/build/notiflix-notify-aio";

export function useNotify({ message, type }) {
  if (type == "success") {
    return Notify.success(message, { pauseOnHover: true, timeout: 3500 });
  }

  if (type == "failure") {
    return Notify.failure(message, { pauseOnHover: true, timeout: 3500 });
  }
}
