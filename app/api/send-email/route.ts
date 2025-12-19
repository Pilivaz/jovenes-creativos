import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, correo, asunto, mensaje } = body

    // Validate required fields
    if (!nombre || !correo || !asunto || !mensaje) {
      return NextResponse.json({ error: "Todos los campos son requeridos" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(correo)) {
      return NextResponse.json({ error: "Email inválido" }, { status: 400 })
    }

    // Check if API key exists
    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY is not configured")
      return NextResponse.json({ error: "API key no configurada" }, { status: 500 })
    }

    console.log("[v0] Sending email with Resend API...")

    // Send email using Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ["gdjcreativos@gmail.com"],
        reply_to: correo,
        subject: `Nuevo mensaje de contacto: ${asunto}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #4F46E5;">Nuevo mensaje desde el sitio web</h2>
            <div style="background-color: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Nombre:</strong> ${nombre}</p>
              <p><strong>Correo:</strong> ${correo}</p>
              <p><strong>Asunto:</strong> ${asunto}</p>
            </div>
            <div style="background-color: #FFFFFF; padding: 20px; border: 1px solid #E5E7EB; border-radius: 8px;">
              <h3 style="color: #374151; margin-top: 0;">Mensaje:</h3>
              <p style="color: #6B7280; line-height: 1.6; white-space: pre-wrap;">${mensaje}</p>
            </div>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
              <p style="color: #9CA3AF; font-size: 12px;">
                Este mensaje fue enviado desde el formulario de contacto de Jóvenes Creativos.<br>
                Para responder, utiliza el correo: ${correo}
              </p>
            </div>
          </div>
        `,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error("[v0] Resend API error:", data)
      return NextResponse.json({ error: `Error de Resend: ${data.message || "Error desconocido"}` }, { status: 500 })
    }

    console.log("[v0] Email sent successfully:", data.id)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Error in send-email route:", error)
    return NextResponse.json({ error: "Error interno del servidor. Por favor, intenta nuevamente." }, { status: 500 })
  }
}
