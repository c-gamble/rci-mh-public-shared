'use server';
import { NextResponse } from 'next/server';
 
export async function POST( request: Request ) {

    const req = await request.json()

    const emailTemplate = `
        <h1>Message from ${req.firstName} ${req.lastName}</h1>
        <p>Phone Number: ${req.phoneNumber}</p>
        <p>Email Address: ${req.emailAddress}</p>
        <p>Message: ${req.message}</p>
    `

    const nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
          user: 'rci.mh.superuser@gmail.com',
          pass: process.env.EMAIL_PASSWORD,
        },
        secure: true,
    });

    const mailData = {
        from: 'rci.mh.superuser@gmail.com',
        to: "rochestercommunityinitiative@gmail.com",
        subject: `[Mental Health Contact Form] from ${req.firstName} ${req.lastName}`,
        text: req.message,
        html: emailTemplate,
    };

    transporter.sendMail(mailData, function (err: any, info: any) {
        if(err)
          console.log(err)
        else
          console.log(`Email sent to ${mailData.to[0]}`);
    });

    return NextResponse.json({ message: 'Email successfully sent', status: 200 })
}
