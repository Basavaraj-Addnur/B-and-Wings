import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("Lead Popup API Called");

    const { name, city, phone, service } = await req.json();

    // Validation
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Bandwings Lead <onboarding@resend.dev>",
      to: "servicesbandwings@gmail.com",
      subject: `🔥 New Homepage Lead - ${name}`,
      html: `
        <h2>New Homepage Popup Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>City:</strong> ${city || "-"}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Interested In:</strong> ${service}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Lead popup error:", error);

    return NextResponse.json(
      { error: error?.message || "Email sending failed" },
      { status: 500 }
    );
  }
}