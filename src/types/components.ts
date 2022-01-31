import React from "react";

/**
 * For default properties like children, className, etc
 */
export interface HTMLElement extends React.HTMLProps<any> {};

export interface DivElement extends React.HTMLProps<HTMLDivElement> {};
export interface FormElement extends React.HTMLProps<HTMLFormElement> {};
export interface ButtonElement extends React.HTMLProps<HTMLButtonElement> {};
export interface SelectElement extends React.HTMLProps<HTMLSelectElement> {};
export interface InputElement extends React.HTMLProps<HTMLInputElement> {};
export interface FormControlsElement extends React.HTMLProps<HTMLFormControlsCollection> {};