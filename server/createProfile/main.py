import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
  'projectId': 'rustee-prod',
})

db = firestore.client()

def createProfile(data, context):

    if 'phoneNumber' in data:
        uid = data["uid"]
        phone = data["phoneNumber"]

        doc_ref = db.collection(u'userProfile').document(uid)    
        doc_ref.set({
            u'phone': phone
        })

        return True

    else:
        return False