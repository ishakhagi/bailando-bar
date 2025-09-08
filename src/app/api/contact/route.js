import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, telefon, email, betreff, nachricht } = await request.json();

    // Validierung: Name, Betreff und Nachricht sind Pflichtfelder
    if (!name || !betreff || !nachricht) {
      return NextResponse.json(
        { error: "Name, Betreff und Nachricht sind Pflichtfelder." },
        { status: 400 }
      );
    }

    // Validierung: Mindestens E-Mail oder Telefon muss angegeben werden
    if (!email && !telefon) {
      return NextResponse.json(
        {
          error:
            "Bitte geben Sie entweder eine E-Mail-Adresse oder Telefonnummer an.",
        },
        { status: 400 }
      );
    }

    // E-Mail-Validierung (wenn angegeben)
    if (email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return NextResponse.json(
          { error: "Bitte geben Sie eine gültige E-Mail-Adresse ein." },
          { status: 400 }
        );
      }
    }

    // Nodemailer Transporter konfigurieren
    // WICHTIG: Sie müssen Ihre E-Mail-Konfiguration hier eintragen
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: process.env.SMTP_PORT || 587,
      secure: false, // true für 465, false für andere Ports
      auth: {
        user: process.env.SMTP_USER, // Ihre E-Mail-Adresse
        pass: process.env.SMTP_PASS, // Ihr E-Mail-Passwort oder App-Passwort
      },
    });

    // E-Mail-Inhalt zusammenstellen
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER, // Ziel-E-Mail-Adresse
      subject: `Kontaktformular: ${betreff}`,
      html: `
        <h3>Neue Nachricht vom Kontaktformular</h3>
        <p><strong>Name:</strong> ${name}</p>
        ${email ? `<p><strong>E-Mail:</strong> ${email}</p>` : ""}
        ${telefon ? `<p><strong>Telefon:</strong> ${telefon}</p>` : ""}
        <p><strong>Betreff:</strong> ${betreff}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${nachricht.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>Diese Nachricht wurde über das Kontaktformular der Website gesendet.</small></p>
      `,
      text: `
Neue Nachricht vom Kontaktformular

Name: ${name}
${email ? `E-Mail: ${email}` : ""}
${telefon ? `Telefon: ${telefon}` : ""}
Betreff: ${betreff}

Nachricht:
${nachricht}

Diese Nachricht wurde über das Kontaktformular der Website gesendet.
      `,
    };

    // E-Mail senden
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Ihre Nachricht wurde erfolgreich gesendet!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler beim Senden der E-Mail:", error);
    return NextResponse.json(
      {
        error:
          "Es gab einen Fehler beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 }
    );
  }
}
