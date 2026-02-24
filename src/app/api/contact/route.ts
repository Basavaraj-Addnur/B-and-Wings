import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("API KEY LOADED:", process.env.RESEND_API_KEY ? "YES" : "NO");

    const { name, email, city, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const response = await resend.emails.send({
      from: "Bandwings Contact <onboarding@resend.dev>", // will change after domain verify
      to: "servicesbandwings@gmail.com",
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>City:</strong> ${city || "-"}</p>
        <p><strong>Phone:</strong> ${phone || "-"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    console.log("Resend response:", response);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Resend error:", error);

    return NextResponse.json(
      { error: error?.message || "Email sending failed" },
      { status: 500 }
    );
  }
}