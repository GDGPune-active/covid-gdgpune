def sendCustomEmail(email, msg):
    from config import senderEmail, senderPassword
    import smtplib
    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()

        print(senderEmail)
        smtp.login(senderEmail, senderPassword)

        smtp.sendmail(senderEmail, email, msg)

    return True

def emailTrigger(data, context):
    if 'email' in data['updateMask']['fieldPaths']:
        email = data['value']['fields']['email']['stringValue']
        subject = 'Notification from covid help'
        body = "Dear XYZ\n\nThanks for registering your email with our covid help platform\n\n Regards,\nTeam covid help"
        msg = f'Subject: {subject}\n\n{body}'
        # sendCustomEmail(email, msg)
        return True

    else:
        return False