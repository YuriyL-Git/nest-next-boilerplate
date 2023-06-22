import nodemailer from "nodemailer";
import { environment } from "@libs/shared/environement";

// https://blog.devgenius.io/correct-way-in-setting-up-nodemailer-for-email-service-946f6bfd73e8
interface mailProps {
  receivers: string[];
  from: string;
  subject: string;
  htmlBody: string;
}

const {
  nodemailer: {
    googleRefreshTokenEmail,
    googleClientSecretEmail,
    googleClientIdEmail,
    mailAddress,
    googleAccessTokenEmail,
  },
} = environment;

export async function sendMail({ receivers, from, subject, htmlBody }: mailProps) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: mailAddress,
      clientId: googleClientIdEmail,
      clientSecret: googleClientSecretEmail,
      accessToken: googleAccessTokenEmail,
      refreshToken: googleRefreshTokenEmail,
    },
  });

  await transporter.sendMail({
    from: `"${from}" ${mailAddress}`,
    to: receivers.join(","),
    subject,
    html: htmlBody,
  });
}
