import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const { name, email, phone, service, notes } = body;

  if (!email || !name || !phone || !service || !notes) {
    return new Response(JSON.stringify({ error: "Missing fields" }), {
      status: 400,
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.tajhouse.com", // أو smtp.gmail.com إذا كان Gmail
      port: 465,
      secure: true,
      auth: {
        user: "karimakl@tajhouse.com", // الإيميل اللي بيبعت
        pass: "Karim@2024#", // باسورد التطبيق (مش الباسورد العادي)
      },
    });

    await transporter.sendMail({
      from: '"Website Contact Form" <karimakl@tajhouse.com>',
      to: "info@tajera.net",
      subject: "New Contact Request",
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Notes:</strong><br/>${notes}</p>
      `,
    });

    return new Response(JSON.stringify({ message: "Message sent" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Mail error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
