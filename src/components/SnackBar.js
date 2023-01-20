import React from "react";

export default function SnackBar() {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={snackData}
      action={action}
    />
  );
}
