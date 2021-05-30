import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.ApplicationDefault()
firebase_admin.initialize_app(cred, {
  'projectId': 'gdg-covid', # Update project id as per your unique project ID
})

db = firestore.client()

def hospitalBeds(data, context):

    if 'verified' in data['updateMask']['fieldPaths']:

        context = context.resource.split('/')
        uid1 = context[-3]
        uid2 = context[-1]

        doc_ref = db.collection(u'userProfile').document(uid1).collection(u'hospitalBeds').document(uid2)

        if(data['value']['fields']['verified']['stringValue']=='Yes'):
            doc_ref.update({
                u'date': firestore.SERVER_TIMESTAMP
                })
        else:
            doc_ref.update({
                u'date': firestore.DELETE_FIELD
                })
    return True