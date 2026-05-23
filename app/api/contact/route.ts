import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, company, phone, email, service, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: "daniherreravargas29@gmail.com",
      subject: `Cotización - ${service} | ${name} ${company ? `- ${company}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #f97316;">Nueva Solicitud de Cotización</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Nombre</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
            ${company ? `<tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Empresa</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${company}</td></tr>` : ""}
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Teléfono</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Correo</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px; border-bottom: 1px solid #eee; font-weight: bold;">Servicio</td><td style="padding: 8px; border-bottom: 1px solid #eee;">${service}</td></tr>
          </table>
          <h3 style="color: #f97316; margin-top: 24px;">Mensaje</h3>
          <p style="padding: 12px; background: #f9f9f9; border-radius: 8px;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin-top: 24px;" />
          <p style="color: #666; font-size: 12px;">Enviado desde trailco.com.co</p>
        </div>
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ success: false, error: "Error al enviar el correo" }, { status: 500 })
  }
}
