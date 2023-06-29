 const regexConstants = {
    EMAIL: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
    PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%_*#?&])[A-Za-z\d@$_!%*#?&]{8,}$/,
};

const regexMessages = {
    EMAIL: 'email must include "@" symbol, example - user@gmail.com',
    PASSWORD: 'password must icnlude at least one special symbol, one upper case letter and be more than 8 symbols',
};

 export {
     regexConstants,
     regexMessages,
 };
