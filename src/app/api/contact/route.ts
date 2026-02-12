import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const NOTIFICATION_EMAIL = "info@aiagency.co.jp";

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

    // Send email to info@aiagency.co.jp
    const { error } = await resend.emails.send({
      from: "AI Agency <contact@aiagency.co.jp>",
      to: [NOTIFICATION_EMAIL],
      replyTo: data.email,
      subject: `新規お問い合わせ: ${data.clinicName} - ${data.name}`,
      html: `
        <h2>新しいお問い合わせが届きました</h2>
        <p><strong>送信日時:</strong> ${data.timestamp}</p>
        <p><strong>クリニック名:</strong> ${data.clinicName}</p>
        <p><strong>お名前:</strong> ${data.name}</p>
        <p><strong>メール:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
        <p><strong>電話番号:</strong> ${data.phone}</p>
        <p><strong>月間患者数:</strong> ${data.avgPatients}</p>
        <p><strong>受付体制:</strong> ${data.receptionSetup}</p>
        <p><strong>導入時期:</strong> ${data.timeline}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${data.message || "(なし)"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

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





