
export const validEmail = new RegExp(
'^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+\.[a-z]{2,4}$'
);
export const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
export const validMobilNo = new RegExp('^[7-9]{1}[0-9]{9}');
export const validText = new RegExp('^[a-zA-Z ]*$');
