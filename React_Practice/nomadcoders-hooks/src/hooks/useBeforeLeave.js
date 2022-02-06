import { useEffect } from "react";

export const useBeforeLeave = onBefore => {
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  });

  const handle = event => {
    const { clientY } = event;
    // 웹 브라우저의 상단부분으로 마우스 이탈시에만 이벤트 발생
    if (clientY <= 0) {
      onBefore();
    }
  };
}