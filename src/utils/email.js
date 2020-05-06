import * as emailjs from "emailjs-com";
const sendContactEmail = (templateParams)=> {
    return  SendEmailFromJS(
        {
           provider : "gmail",
        templateId : "template_ImftiFgW",
        templateParams : templateParams,
        userID : process.env.EMAIL_JS_API_KEY
        }
      );
}

const sendNewsLetterEmail = (templateParams)=>{
    return  SendEmailFromJS(
        {
           provider: "gmail",
        templateId : "subscribtion_to_newsletter_template",
        templateParams : templateParams,
        userID : process.env.EMAIL_JS_API_KEY
        }
      );
}

const SendEmailFromJS =({provider,templateId , templateParams,userID}) => {
    return emailjs.send(
        provider,
        templateId,
        templateParams,
        userID
    )
}

export {sendContactEmail,sendNewsLetterEmail}