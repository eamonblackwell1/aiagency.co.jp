import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  clinicName: string;
  name: string;
  email: string;
  phone: string;
  avgPatients: string;
  receptionSetup: string;
  timeline: string;
  message: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    const requiredFields = [
      "clinicName",
      "name",
      "email",
      "phone",
      "avgPatients",
      "receptionSetup",
      "timeline",
    ];

    for (const field of requiredFields) {
      if (!data[field as keyof ContactFormData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the submission (in production, you'd save to database or send email)
    console.log("=== New Contact Form Submission ===");
    console.log("Timestamp:", data.timestamp);
    console.log("Clinic Name:", data.clinicName);
    console.log("Name:", data.name);
    console.log("Email:", data.email);
    console.log("Phone:", data.phone);
    console.log("Avg Patients:", data.avgPatients);
    console.log("Reception Setup:", data.receptionSetup);
    console.log("Timeline:", data.timeline);
    console.log("Message:", data.message || "(No message)");
    console.log("===================================");

    // TODO: Integrate with email service (e.g., Resend, SendGrid)
    // TODO: Store in database (e.g., Supabase)
    // TODO: Send confirmation email to user

    return NextResponse.json(
      { 
        success: true, 
        message: "お問い合わせを受け付けました" 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}





