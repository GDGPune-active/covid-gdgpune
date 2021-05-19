import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
  'projectId': 'rustee-prod',
})

db = firestore.client()

def createProfile(data, context):

    if 'mobile' in data:
        uid = data["uid"]
        mobile = data["mobile"]

        doc_ref = db.collection(u'userProfile').document(uid)    
        doc_ref.set({
            u'Mobile': mobile
        })

        return True

    else:
        return False