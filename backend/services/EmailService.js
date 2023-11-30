const jwt = require("jsonwebtoken");
const authService = require("./AuthService");
const nodemailer = require("nodemailer")
const moment = require("moment")



class EmailService{

   async sendEmail({subject,text,html,email}){

        let transporter = nodemailer.createTransport({
            host:'smtp.gmail.com',
            port:465,
            secure:true,
            auth:{
                pass:process.env.SMTP_PW,
                user:process.env.APP_EMAIL,
            }
        })

        try {

            let info = await transporter.sendMail({
                from:process.env.APP_EMAIL,
                to:email,
                subject,
                text,
                html,
            })
            
            return info.messageId;

        } catch (error) {
                console.log(error)
                return error.message ;
        }   

    }
    getResetPasswordHtml(email){

        const confirmationHash= authService.getEmailConfirmationHash(email);
        let linkExpiratinTime = new Date().getTime() + 1000 * 60 *10;
        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background: black; color: white;">
    <table cellspacing="0" cellpadding="0" width="100%" style="background: black;">
        <tr >
            <td style="padding: 1rem;">
                <table cellspacing="0" cellpadding="0" style="display: flex; flex-direction: column;">
                    <tr>
                        <td style="display: flex; align-items: center; gap: 10px;">
                            <h1 style="color:orange">Resourcify</h1>
                        </td>
                    </tr>
                    <tr>
                        <td >
                            <p style="letter-spacing:1px; color:white;">Reset Resourcify password .</p>
                            <p style="letter-spacing:1px; color:white;">You should reset the password before this link expires. </p>
                            <p style="letter-spacing:1px; color:white;">The validation time of this reset password link is for 5 minutes after this email was received . </p>
                            <p style="letter-spacing:1px; color:white;">Click the reset  button to reset  your password.</p>
                            <p style="letter-spacing:1px; color:white;">You can reset password till ${moment(linkExpiratinTime).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <a href="${process.env.FRONTEND_URL}/auth/resetpassword?token=${confirmationHash}"
                                style="text-decoration: none; color: white;">
                                <button style="background-color: orange; height: 45px; padding: 0 1rem; border-radius:4px; font-size: 15px; letter-spacing: 1px; border: none; color: white;">
                                   Reset Password
                                </button>
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        `
        
      

    }

    getAccConfirmationHtml(email){

        const hash = authService.getEmailConfirmationHash(email)
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Poppins', sans-serif; margin: 0; padding: 0; background: black; color: white;">
    <table cellspacing="0" cellpadding="0" width="100%" style="background: black;">
        <tr>
            <td style="padding: 1rem;">
                <table cellspacing="0" cellpadding="0" style="display: flex; flex-direction: column;">
                    <tr>
                        <td style="display: flex; align-items: center; gap: 10px;">
                            <h1 style="color:orange">Resourcify</h1>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p  style="letter-spacing:1px;">Hello Resourcify welcomes you</p>
                            <p  style="letter-spacing:1px;" >You are closer to being part of Resourcify.</p>
                            <p  style="letter-spacing:1px;">Click the verify button to verify your email.</p>
                            <a href="${process.env.FRONTEND_URL}/info/verifyEmail?token=${hash}&info=verify_email"
                                style="text-decoration: none; color: white;">
                                <button style="background-color: orange; border-radius:4px; height: 45px; padding: 0 1rem; font-size: 15px; letter-spacing: 1px; border: none; color: white;">
                                    Verify Now
                                </button>
                            </a>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`

    }

    async sentConfirmationEmail(email){
        const emailPayload = {
            text:"Confirm your email",
            subject:"Email confirmation ",
            html:this.getAccConfirmationHtml(email),
            email
        }
        try {
            const messageId = await this.sendEmail(emailPayload);
            return messageId;
        } catch (error) {
            console.log(error)
            return error.message;
        }
    }

  
  
    async sentResetPassword(email){
        const emailPayload = {
            text:"Reset password",
            subject:"Reset password",
            html:this.getResetPasswordHtml(email),
            email
        }
        try {
            const messageId = await this.sendEmail(emailPayload);
            return messageId;
        } catch (error) {
            console.log(error)
            return error.message;
        }
    }

    async verifyEmailConfirmationToken(token) {

        try {

            const decoded = jwt.verify(token, process.env.EMAIL_CONFIRMATOIN_HASH)
            return { email: decoded?.email, exp: false, invalidLink: false }

        } catch (error) {
            console.log(error.message)
            if (error?.message === "jwt expired") {
                throw Error("Confirmation Link is  expired . Try again later ")
            } else {
                throw Error("Invalid Confirmation Link  ")
            
            }

        }
    }

    }
    module.exports = new  EmailService()

