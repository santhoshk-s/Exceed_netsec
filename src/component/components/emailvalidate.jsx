//Form validation
//email= /^[^s@]+@[^\s@]+$/;
//password=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
export const emailvalidate =email =>{
    const emailRegex=/^[^s@]+@[^\s@]+$/;
    return emailRegex.test(email);
}
export const passwordvalidate = password => {
    const passwordRegex= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}