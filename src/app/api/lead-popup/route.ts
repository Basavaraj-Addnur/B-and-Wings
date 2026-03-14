import { NextResponse } from "next/server";
// Commented out to prevent build errors while in dummy mode
// import { Resend } from "resend";

// DUMMY FIX: We comment this out so it doesn't crash the build looking for the API key
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    console.log("Lead Popup API Called (DUMMY MODE)");

    const { name, city, phone, service } = await req.json();

    // Validation
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // DUMMY BEHAVIOR: Simulate a 1-second server delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // DUMMY BEHAVIOR: Log the data to the server console instead of emailing it
    console.log("✅ DUMMY MODE - Lead Popup Submitted:", { name, city, phone, service });

    /* ACTUAL CODE (Save this for when you go live)
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
    */

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Lead popup error:", error);

    return NextResponse.json(
      { error: "Email sending failed" },
      { status: 500 }
    );
  }
}