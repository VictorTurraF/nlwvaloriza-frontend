import React from "react";

/**
 * For default properties like children, className, etc
 */
export interface HTMLElement<T = any> extends React.HTMLProps<T> {};

export interface DivElement extends HTMLElement<HTMLDivElement> {};
export interface FormElement extends HTMLElement<HTMLFormElement> {};
export interface ButtonElement extends HTMLElement<HTMLButtonElement> {};
export interface SelectElement extends HTMLElement<HTMLSelectElement> {};
export interface InputElement extends HTMLElement<HTMLInputElement> {};
export interface FormControlsElement extends HTMLElement<HTMLFormControlsCollection> {};