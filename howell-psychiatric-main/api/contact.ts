import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_ADDRESS = 'amy@howell-psychiatric-mental-wellness.com';
const TO_ADDRESS   = 'amy@howell-psychiatric-mental-wellness.com';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only accept POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { firstName, lastName, email, phone, message } = req.body as {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    message?: string;
  };

  // Basic validation
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required.' });
  }

  const fullName = [firstName, lastName].filter(Boolean).join(' ') || 'Website Visitor';

  try {
    const { data, error } = await resend.emails.send({
      from: FROM_ADDRESS,
      to: [TO_ADDRESS],
      replyTo: email,
      subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #fefdfb; border: 1px solid #e2eff0; border-radius: 16px;">
          <div style="background: #15453d; padding: 24px 32px; border-radius: 12px; margin-bottom: 32px;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; letter-spacing: -0.5px;">New Patient Inquiry</h1>
            <p style="color: #a0a572; margin: 6px 0 0; font-size: 14px;">Howell Psychiatric Mental Wellness LLC</p>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2eff0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; width: 130px; vertical-align: top;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2eff0; color: #15453d; font-size: 15px; font-weight: 600;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2eff0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2eff0; color: #15453d; font-size: 15px;"><a href="mailto:${email}" style="color: #15453d;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2eff0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2eff0; color: #15453d; font-size: 15px;"><a href="tel:${phone}" style="color: #15453d;">${phone}</a></td>
            </tr>` : ''}
            <tr>
              <td style="padding: 12px 0; color: #6b7280; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Message</td>
              <td style="padding: 12px 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>

          <div style="background: #e2eff0; border-radius: 12px; padding: 16px 20px; margin-top: 8px;">
            <p style="margin: 0; color: #15453d; font-size: 13px;">
              <strong>Reply directly</strong> to this email to respond to ${fullName} at <a href="mailto:${email}" style="color: #a0a572;">${email}</a>.
            </p>
          </div>

          <p style="color: #9ca3af; font-size: 12px; margin-top: 32px; text-align: center;">
            This message was sent via the contact form at howellpsychiatric.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Unexpected error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
