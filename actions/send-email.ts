"use server";

import { Resend } from "resend";

import ContactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/lib/utils";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    console.log(senderEmail, message)

    if (!validateString(senderEmail, 500)) {
        return { error: "Invalid value for sender email" }
    }
    if (!validateString(message, 5000))
        return { error: "Invalid value for message" }

    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "vaibhavkanthi1@gmail.com",
            subject: "Test from resend",
            reply_to: senderEmail as string,
            react: React.createElement(ContactFormEmail, {
                senderEmail: senderEmail as string,
                message: message as string
            })
        })
    } catch (error) {
        return { error: getErrorMessage(error) }
    }

    return { data };
}

