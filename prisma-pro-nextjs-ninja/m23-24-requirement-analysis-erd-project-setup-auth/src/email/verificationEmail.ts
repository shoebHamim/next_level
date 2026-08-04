export const getVerificationEmailContent = (verificationURL: string) => {
  const verificationEmailText = `Welcome to Next Level.

Your access request has been received.
To initialize your account, please confirm your email using the secure link below:

${verificationURL}

This link is valid for a limited time. If you did not initiate this request, disregard this transmission.

— Next Level Systems
`;
  const verificationEmailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="color-scheme" content="dark only">
<meta name="supported-color-schemes" content="dark">
<title>Verify Your Email · Next Level</title>
</head>
<body style="margin:0;padding:0;background:#05060a;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">
  <!-- Hidden preheader -->
  <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0;color:#05060a;">
    Confirm your access to Next Level — your verification link is waiting.
  </div>

  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:radial-gradient(ellipse at top,#1a0b3d 0%,#0a0420 45%,#05060a 100%);padding:48px 20px;">
    <tr>
      <td align="center">

        <!-- Outer glow container -->
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;">
          <tr>
            <td align="center" style="position:relative;">

              <!-- Neon glow halo -->
              <div style="
                position:relative;
                border-radius:20px;
                padding:2px;
                background:linear-gradient(135deg,#00f0ff 0%,#7c3aed 35%,#ec4899 70%,#00f0ff 100%);
                background-size:300% 300%;
                box-shadow:
                  0 0 40px rgba(124,58,237,0.45),
                  0 0 80px rgba(0,240,255,0.25),
                  inset 0 0 20px rgba(255,255,255,0.04);
              ">
                <!-- Card -->
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:linear-gradient(180deg,#0b0d18 0%,#0a0b14 100%);border-radius:18px;overflow:hidden;">

                  <!-- Header / Hero -->
                  <tr>
                    <td align="center" style="position:relative;padding:48px 32px 32px;background:radial-gradient(ellipse at 50% 0%,rgba(124,58,237,0.35) 0%,transparent 60%);">

                      <!-- Brand mark -->
                      <div style="display:inline-block;margin-bottom:24px;padding:8px 18px;border:1px solid rgba(0,240,255,0.35);border-radius:999px;background:rgba(0,240,255,0.06);">
                        <span style="font-size:11px;letter-spacing:3px;color:#00f0ff;font-weight:600;">NEXT · LEVEL · OS</span>
                      </div>

                      <h1 style="margin:0 0 8px;color:#ffffff;font-size:36px;font-weight:800;letter-spacing:-1px;line-height:1.1;">
                        Activate Your<br/>
                        <span style="background:linear-gradient(90deg,#00f0ff 0%,#7c3aed 50%,#ec4899 100%);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;">
                          Digital Identity
                        </span>
                      </h1>

                      <p style="margin:14px 0 0;color:#8a8fa3;font-size:14px;letter-spacing:1px;text-transform:uppercase;">
                        Secure · Encrypted · Verified
                      </p>

                      <!-- Animated-looking pulse dot -->
                      <table role="presentation" align="center" cellspacing="0" cellpadding="0" style="margin-top:28px;">
                        <tr>
                          <td align="center" style="width:8px;height:8px;border-radius:50%;background:#00f0ff;box-shadow:0 0 12px #00f0ff,0 0 24px rgba(0,240,255,0.6);">
                            &nbsp;
                          </td>
                        </tr>
                      </table>

                    </td>
                  </tr>

                  <!-- Content -->
                  <tr>
                    <td style="padding:24px 40px 16px;color:#c8cce0;">

                      <p style="margin:0 0 18px;font-size:15px;line-height:1.7;color:#c8cce0;">
                        Welcome to <strong style="color:#ffffff;font-weight:700;">Next Level</strong> — your gateway to a more intelligent, frictionless experience.
                      </p>

                      <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:#8a8fa3;">
                        To complete your onboarding and unlock the platform, confirm your email address using the secure channel below.
                      </p>

                      <!-- Glassmorphic CTA -->
                      <table role="presentation" cellspacing="0" cellpadding="0" align="center" style="margin:32px auto;">
                        <tr>
                          <td align="center" style="border-radius:14px;background:linear-gradient(135deg,#00f0ff 0%,#7c3aed 100%);box-shadow:0 10px 40px rgba(124,58,237,0.5),0 0 30px rgba(0,240,255,0.35);">
                            <a
                              href="${verificationURL}"
                              style="
                                display:inline-block;
                                padding:18px 44px;
                                color:#0a0b14;
                                text-decoration:none;
                                font-size:15px;
                                font-weight:800;
                                letter-spacing:2px;
                                text-transform:uppercase;
                                border-radius:14px;
                              "
                            >
                              Verify Email →
                            </a>
                          </td>
                        </tr>
                      </table>

                      <!-- Stats / meta row -->
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:32px 0 8px;">
                        <tr>
                          <td width="33%" align="center" style="padding:18px 8px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:10px;">
                            <div style="font-size:10px;letter-spacing:2px;color:#6b7090;text-transform:uppercase;margin-bottom:6px;">Expires</div>
                            <div style="font-size:14px;color:#00f0ff;font-weight:700;">24:00:00</div>
                          </td>
                          <td width="2%">&nbsp;</td>
                          <td width="33%" align="center" style="padding:18px 8px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:10px;">
                            <div style="font-size:10px;letter-spacing:2px;color:#6b7090;text-transform:uppercase;margin-bottom:6px;">Encryption</div>
                            <div style="font-size:14px;color:#ec4899;font-weight:700;">SHA-256</div>
                          </td>
                          <td width="2%">&nbsp;</td>
                          <td width="33%" align="center" style="padding:18px 8px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:10px;">
                            <div style="font-size:10px;letter-spacing:2px;color:#6b7090;text-transform:uppercase;margin-bottom:6px;">Status</div>
                            <div style="font-size:14px;color:#7c3aed;font-weight:700;">PENDING</div>
                          </td>
                        </tr>
                      </table>

                      <!-- Fallback URL -->
                      <p style="margin:32px 0 8px;font-size:12px;color:#6b7090;line-height:1.6;letter-spacing:0.5px;text-transform:uppercase;">
                        ↳ Alternative verification channel
                      </p>

                      <div style="padding:14px 16px;background:rgba(0,240,255,0.04);border:1px dashed rgba(0,240,255,0.25);border-radius:10px;word-break:break-all;font-size:12px;color:#00f0ff;font-family:'SF Mono',Menlo,Consolas,monospace;line-height:1.5;">
                        ${verificationURL}
                      </div>

                      <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:36px 0 24px;">

                      <p style="margin:0;font-size:13px;color:#6b7090;line-height:1.6;">
                        <span style="color:#c8cce0;">Didn't initiate this request?</span> You can safely ignore this transmission — no action will be taken on your account.
                      </p>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td align="center" style="padding:28px 32px;background:rgba(255,255,255,0.02);border-top:1px solid rgba(255,255,255,0.05);">
                      <div style="margin-bottom:12px;">
                        <span style="display:inline-block;width:6px;height:6px;background:#00f0ff;border-radius:50%;box-shadow:0 0 8px #00f0ff;vertical-align:middle;"></span>
                        <span style="display:inline-block;margin:0 10px;color:#6b7090;font-size:11px;letter-spacing:2px;text-transform:uppercase;vertical-align:middle;">System Online</span>
                      </div>
                      <p style="margin:0;color:#6b7090;font-size:11px;letter-spacing:1px;">
                        © ${new Date().getFullYear()} NEXT LEVEL SYSTEMS · TRANSMISSION ID #${Math.random().toString(36).slice(2, 10).toUpperCase()}
                      </p>
                    </td>
                  </tr>

                </table>
              </div>

            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`;
  return { verificationEmailText, verificationEmailHtml };
};