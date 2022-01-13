import React, { useState } from "react";
import s from './MyInput.module.css' ;
const MyInput = React.forwardRef ((props,ref) => {


   return (
      <input ref={ref} className={s.muInput} {...props } type="text" />
   );
});
export default MyInput;