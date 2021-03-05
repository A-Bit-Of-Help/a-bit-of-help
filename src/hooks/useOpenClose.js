import * as React from "react";

export function useOpenClose() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = React.useCallback(() => {
        setOpen(true);
    }, [setOpen]);

    const handleClickClose = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    return { handleClickOpen, handleClickClose, open };
}
