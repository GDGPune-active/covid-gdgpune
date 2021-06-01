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
        bedType = data['value']['fields']['bedType']['stringValue']
        vacantBeds = data['value']['fields']['vacantNo']['stringValue']

        if(data['value']['fields']['verified']['stringValue']=='Yes'):
            doc_ref.update({
                u'date': firestore.SERVER_TIMESTAMP
                })

            # ADD value
            total_ref = db.collection(u'totalData').document('totalDataforDashboard')
            total = total_ref.to_dict()

            total_ref.update({
                'totalBeds': total['totalBeds']+vacantBeds
                })

            if(bedType == 'Without Oxygen'):
                total_ref.update({
                'withoutOxygen': total['withoutOxygen']+vacantBeds
                })

            elif(bedType == 'With Oxygen'):
                total_ref.update({
                'withOxygen': total['withOxygen']+vacantBeds
                })

            elif(bedType == 'ICU with ventilator'):
                total_ref.update({
                'ICUwithVentilator': total['ICUwithVentilator']+vacantBeds
                })

            elif(bedType == 'ICU without ventilator'):
                total_ref.update({
                'ICUwithoutVentilator': total['ICUwithoutVentilator']+vacantBeds
                })

        else:
            doc_ref.update({
                u'date': firestore.DELETE_FIELD
                })
            
            if 'verified' in data['oldValue']['fields']:
                
                #subtract
                total_ref = db.collection(u'totalData').document('totalDataforDashboard')
                total = total_ref.to_dict()

                total_ref.update({
                    'totalBeds': total['totalBeds']-vacantBeds
                    })

                if(bedType == 'Without Oxygen'):
                    total_ref.update({
                    'withoutOxygen': total['withoutOxygen']-vacantBeds
                    })

                elif(bedType == 'With Oxygen'):
                    total_ref.update({
                    'withOxygen': total['withOxygen']-vacantBeds
                    })

                elif(bedType == 'ICU with ventilator'):
                    total_ref.update({
                    'ICUwithVentilator': total['ICUwithVentilator']-vacantBeds
                    })

                elif(bedType == 'ICU without ventilator'):
                    total_ref.update({
                    'ICUwithoutVentilator': total['ICUwithoutVentilator']-vacantBeds
                    })
        return True

    else:
        return False