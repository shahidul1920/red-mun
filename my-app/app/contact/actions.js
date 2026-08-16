"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(str) {
  if (typeof str !== "string") return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendContactEmail(formData) {
  const rawName = formData.get("userName") || "";
  const rawEmail = formData.get("userEmail") || "";
  const rawPhone = formData.get("userPhone") || "";
  const rawMessage = formData.get("userMessage") || "";

  const name = escapeHtml(rawName);
  const email = escapeHtml(rawEmail);
  const phone = escapeHtml(rawPhone);
  const message = escapeHtml(rawMessage).replace(/\n/g, "<br/>");

  try {
    const botField = formData.get("company_website_url");

    // Strictly check if the honeypot field has any text
    if (typeof botField === "string" && botField.length > 0) {
      return { success: true };
    }

    const recipients = process.env.CONTACT_RECIPIENT_EMAILS
      ? process.env.CONTACT_RECIPIENT_EMAILS.split(",").map((e) => e.trim())
      : ["murtaza@redmun.com", "shahidul1920shakil@gmail.com"];

    const data = await resend.emails.send({
      from: "Redmun <no-reply@mail.asthacreatives.com>",
      to: recipients,
      subject: `New Lead: ${name}`,
      reply_to: rawEmail,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

