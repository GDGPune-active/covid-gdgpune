def sendCustomEmail(email, msg):
    from config import senderEmail, senderPassword
    import smtplib, ssl
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
        smtp.login(senderEmail, senderPassword)
        smtp.sendmail(senderEmail, email, msg)
    return True

def emailTrigger(data, context):
    if 'email' in data['updateMask']['fieldPaths']:
        email = data['value']['fields']['email']['stringValue']
        subject = 'Notification from covid help'
        body = "Dear XYZ,\nThanks for registering your email with our covid help platform.\n\n Regards,\nTeam covid help"
        msg = f'To:{email}\nSubject: {subject}\n\n{body}'
        sendCustomEmail(email, msg)
        return True

    else:
        return False