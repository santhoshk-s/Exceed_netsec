import * as yup from "yup";

export const basicSchema=yup.object().shape({
    username: yup.string().required("please enter the Name"),
    useremail: yup.string().email("please enter valid email").required("please enter Email"),
    userphone: yup.number().positive().integer().min(10,"minimum Num 13").required("please entere Number"),
    useraddres: yup.string().required("please enter Address"),
    userdate: yup.string().required("pease enter Date"),
    usertime: yup.string().required("please enter Time")
})
//ADMIN LOGIN
 export const adminSchema=yup.object().shape({
    email:yup.string().email("please enter valid email").required("please enter Email"),
    password: yup.string().required("pease enter password"),
})
