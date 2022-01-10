export const NameValidation = new RegExp("[a-zA-Z]");
export const UserNameValidation = new RegExp("[a-zA-Z]");
export const EmailValidation =
  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
export const MobileNumberValidation = /^[789][0-9]{9}$/;
export const PasswordValidation = /(?=.*\d)(?=.[a-z])(?=.*[A-Z]).{8,16}/g;
export const ConfirmValidation = /(?=.*\d)(?=.[a-z])(?=.*[A-Z]).{8,16}/g;
export const avatar = /(.jpg|.jpeg|.png|.gif)$/i;
