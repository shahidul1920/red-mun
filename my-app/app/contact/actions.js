"use server";

import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  // Environment variable validation
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing environment variable: RESEND_API_KEY");
    return {
      success: false,
      error: "Server configuration error: Contact service is currently unavailable.",
    };
  }

  const resend = new Resend(apiKey);

  const rawName = (formData.get("userName") || "").toString().trim();
  const rawEmail = (formData.get("userEmail") || "").toString().trim();
  const rawPhone = (formData.get("userPhone") || "").toString().trim();
  const rawMessage = (formData.get("userMessage") || "").toString().trim();

  // Server-side input validation
  if (!rawName) {
    return { success: false, error: "Validation Error: Name is required." };
  }
  if (!rawEmail || !EMAIL_REGEX.test(rawEmail)) {
    return { success: false, error: "Validation Error: A valid email address is required." };
  }
  if (!rawMessage || rawMessage.length < 10) {
    return { success: false, error: "Validation Error: Message must be at least 10 characters." };
  }

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
    console.error("Resend API error:", error);
    return { success: false, error: error.message || "Failed to deliver message." };
  }
}
