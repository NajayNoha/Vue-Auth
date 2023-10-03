import router from '@/router'; 


export const verifyEmail = str => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(str);
}

export const verifyPassword = str => {
    return str.length < 8 ? false : true
};

export const redirectTo = (name) =>{
    router.push({name: name})
}

// export const  verifyString = str => {
//     // const nameRegex = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
//     // return nameRegex.test(str);
//     return str
// }