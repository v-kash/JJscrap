// app/api/contact/route.js
import nodemailer from "nodemailer";

const OWNER_EMAIL = "vivanparmar09@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,   // your Gmail address
    pass: process.env.GMAIL_PASS,   // your Gmail App Password (not your real password)
  },
});

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !phone) {
      return Response.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ── 1. Notify owner ──────────────────────────────────────────
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: OWNER_EMAIL,
      subject: `New Pickup Request from ${name}`,
      html: `
        <div style="font-family:'Outfit',sans-serif;max-width:520px;margin:0 auto;background:#f2f0e6;padding:40px 32px;">
          <div style="border-left:3px solid #8b004b;padding-left:16px;margin-bottom:32px;">
            <p style="font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#8b004b;margin:0 0 6px;">
              New Enquiry
            </p>
            <h1 style="font-family:Georgia,serif;font-size:24px;font-weight:300;color:#1a0010;margin:0;">
              Pickup Request
            </h1>
          </div>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#b38787;padding:12px 0 4px;border-bottom:1px solid rgba(26,0,16,0.08);width:90px;">Name</td>
              <td style="font-size:14px;font-weight:300;color:#1a0010;padding:12px 0 4px;border-bottom:1px solid rgba(26,0,16,0.08);">${name}</td>
            </tr>
            <tr>
              <td style="font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#b38787;padding:12px 0 4px;border-bottom:1px solid rgba(26,0,16,0.08);">Phone</td>
              <td style="font-size:14px;font-weight:300;color:#1a0010;padding:12px 0 4px;border-bottom:1px solid rgba(26,0,16,0.08);">${phone}</td>
            </tr>
            <tr>
              <td style="font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#b38787;padding:12px 0 4px;border-bottom:1px solid rgba(26,0,16,0.08);">Email</td>
              <td style="font-size:14px;font-weight:300;color:#1a0010;padding:12px 0 4px;border-bottom:1px solid rgba(26,0,16,0.08);">${email}</td>
            </tr>
            <tr>
              <td style="font-size:10px;letter-spacing:0.16em;text-transform:uppercase;color:#b38787;padding:12px 0 4px;">Message</td>
              <td style="font-size:14px;font-weight:300;color:#1a0010;padding:12px 0 4px;">${message || "—"}</td>
            </tr>
          </table>

          <div style="margin-top:32px;padding-top:20px;border-top:1px solid rgba(26,0,16,0.08);">
            <a href="tel:+91${phone.replace(/\D/g, "")}"
              style="display:inline-block;font-family:sans-serif;font-size:9px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;padding:12px 24px;background:#8b004b;color:#f2f0e6;text-decoration:none;">
              Call Back →
            </a>
          </div>
        </div>
      `,
    });

    // ── 2. Confirm to client ─────────────────────────────────────
    await transporter.sendMail({
      from: `"Scrap Pickup" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We've received your pickup request",
      html: `
        <div style="font-family:'Outfit',sans-serif;max-width:520px;margin:0 auto;background:#f2f0e6;padding:40px 32px;">
          <div style="border-left:3px solid #8b004b;padding-left:16px;margin-bottom:28px;">
            <p style="font-size:10px;letter-spacing:0.22em;text-transform:uppercase;color:#8b004b;margin:0 0 6px;">
              Confirmed
            </p>
            <h1 style="font-family:Georgia,serif;font-size:24px;font-weight:300;color:#1a0010;margin:0;">
              Thank you, ${name}.
            </h1>
          </div>

          <p style="font-size:13px;font-weight:300;color:#4a2030;line-height:1.8;margin-bottom:24px;">
            We've received your pickup request and will get back to you shortly.
            Our team is available <strong style="font-weight:500;">Mon – Sun, 8 AM – 11 PM</strong>.
          </p>

          <div style="background:#8b004b;padding:20px 24px;margin-bottom:28px;">
            <p style="font-size:10px;letter-spacing:0.18em;text-transform:uppercase;color:rgba(242,240,230,0.55);margin:0 0 4px;">
              Your Request
            </p>
            <p style="font-size:13px;font-weight:300;color:#f2f0e6;margin:0;line-height:1.6;">
              ${message || "Pickup request submitted."}
            </p>
          </div>

          <p style="font-size:11px;color:#9a8585;line-height:1.8;margin:0;">
            Need to reach us sooner? Call or WhatsApp us at
            <a href="tel:+919789075963" style="color:#8b004b;text-decoration:none;font-weight:500;">+91 97890 75963</a>
          </p>

          <div style="margin-top:32px;padding-top:20px;border-top:1px solid rgba(26,0,16,0.08);">
            <p style="font-size:9px;letter-spacing:0.14em;text-transform:uppercase;color:#b38787;margin:0;">
              No 120, Rajajinagar Main Road, Madipakkam, Chennai – 600091
            </p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}