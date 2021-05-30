import React, { useState } from "react";

import {
  IConfirmation,
  CONFIRMATION_EMPTY_STATE,
  confirmationProps,
} from "./props";
import Dialog from "./Dialog";
import ConfirmationContext from "./Context";
interface IConfirmationProviderProps {
  children: React.ReactNode;
}

const ConfirmationProvider: React.FC<IConfirmationProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<confirmationProps>();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setState(undefined);
    setOpen(false);
  };
  const requestConfirmation = (props: confirmationProps) => {
    setState(props);
    setOpen(true);
  };
  return (
    <ConfirmationContext.Provider
      value={{
        dialogProps: state,
        open,
        handleClose,
        requestConfirmation,
      }}
    >
      {children}

      <Dialog {...state} open={open} handleClose={handleClose} />
    </ConfirmationContext.Provider>
  );
};

export default ConfirmationProvider;
