import * as React from "react";

export function useOpenClose() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = React.useCallback(() => {
        setOpen(true);
    }, []);

    const handleClickClose = React.useCallback(() => {
        setOpen(false);
    }, []);

    return { handleClickOpen, handleClickClose, open };
}
