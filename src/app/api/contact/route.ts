import { NextResponse } from "next/server";
// Commented out to prevent build errors while in dummy mode
// import { Resend } from "resend";

// DUMMY FIX: We comment this out so it doesn't crash the build looking for the API key
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, city, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // DUMMY BEHAVIOR: Simulate a 1-second server delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // DUMMY BEHAVIOR: Log the data to the server console instead of emailing it
    console.log("✅ DUMMY MODE - Contact Form Submitted:", { name, email, city, phone, message });

    /* ACTUAL CODE (Save this for when you go live)
    const response = await resend.emails.send({
      from: "Bandwings Contact <onboarding@resend.dev>",
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
    */

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Dummy API error:", error);

    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}