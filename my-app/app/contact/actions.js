"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData) {
  const name = formData.get("userName");
  const email = formData.get("userEmail");
  const phone = formData.get("userPhone");
  const message = formData.get("userMessage");

  try {
    // ... inside your try block
    const botField = formData.get("company_website_url");

    // Strictly check if the field has any text (is a string and length > 0)
    if (typeof botField === "string" && botField.length > 0) {
      console.log("🤖 Bot blocked by honeypot!");
      return { success: true };
    }
    const data = await resend.emails.send({
      from: "Astha Creatives <no-reply@mail.asthacreatives.com>",
      to: ["murtaza@redmun.com", "shahidul1920shakil@gmail.com"],
      subject: `New Lead: ${name}`,
      reply_to: email,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // ADD THIS LOG:
    console.log("✅ RESEND SUCCESS PAYLOAD:", data);

    return { success: true, data };
  } catch (error) {
    // ADD THIS LOG:
    console.log("❌ RESEND CRASHED:", error);

    return { success: false, error: error.message };
  }
}
