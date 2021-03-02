import * as React from "react";

export function useCloseWindow(handleClick) {
    const popupRef = React.useRef(null);

    React.useEffect(() => {
        function handleClickOutside(event) {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                handleClick();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [popupRef]);
    return { popupRef };
}
