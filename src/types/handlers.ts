import React from "react";

/**
 * Common function types used as event handlers 
 */
export type InputChangeHandler = React.ChangeEventHandler<HTMLInputElement>;
export type SelectChangeHandler = React.ChangeEventHandler<HTMLSelectElement>;
export type FormChangeHandler = React.ChangeEventHandler<HTMLFormElement>;
export type FormControlChangeHandler = React.ChangeEventHandler<HTMLFormControlsCollection>;
export type ButtonClickHandler = React.MouseEventHandler<HTMLButtonElement>;
