export const userValidate = (email, password) => {
    const emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    const passwordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)

    if (!emailValid && !passwordValid) return 'Email and Password not valid'
    if (!emailValid) return 'Email not valid'
    if (!passwordValid) return 'Password not valid'

    return null;

}