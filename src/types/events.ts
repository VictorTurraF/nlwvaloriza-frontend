import React from "react";

/**
 * Common event types used in event parameters that are passed by event handlers functions
 */
export type InputChange = React.ChangeEvent<HTMLInputElement>;
export type SelectChange = React.ChangeEvent<HTMLSelectElement>;
export type FormChange = React.ChangeEvent<HTMLFormElement>;
export type FormControlChange = React.ChangeEvent<HTMLFormControlsCollection>;
export type ButtonClick = React.MouseEvent<HTMLButtonElement>;
