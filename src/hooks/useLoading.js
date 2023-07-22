import { Loading } from "notiflix/build/notiflix-loading-aio";

export function useLoading({ is_loading }) {
  if (is_loading) {
    return Loading.circle({ svgColor: "#00a2ff" });
  } else {
    return Loading.remove();
  }
}
