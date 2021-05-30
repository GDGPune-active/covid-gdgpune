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
        subject = 'Covid Help'
        body = "Hey,\n\nAs a developer community we are working on a support against COVID project. We hope we can help you with your requirements.\n\nYour feedback will help us improve the portal.\n\nThanks for registering your email with our covid help platform.\n\nThanks & Regards,\nTeam covid help"
        msg = f'To:{email}\nSubject: {subject}\n\n{body}'
        sendCustomEmail(email, msg)
        return True

    else:
        return False