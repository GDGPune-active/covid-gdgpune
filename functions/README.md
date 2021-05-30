## Getting Started

### Prerequisites

Google firestore and Cloud functions will be used.

## Guide to deploy functions on cloud
1. Initiliaze cloud and then login
2. `cd` to individual directory of the function you wanted to deploy and deploy using commands mention below

Command to deploy `createProfile`: gcloud functions deploy createProfile --trigger-event providers/firebase.auth/eventTypes/user.create --trigger-resource `gdg-covid` --runtime python37

Command to deploy `emailTrigger`: gcloud functions deploy emailTrigger --runtime python37 --trigger-event "providers/cloud.firestore/eventTypes/document.update" --trigger-resource "projects/gdg-covid/databases/(default)/documents/userProfile/{ID}"

Command to deploy `hospitalBeds`: gcloud functions deploy hospitalBeds --runtime python37 --trigger-event "providers/cloud.firestore/eventTypes/document.write" --trigger-resource "projects/gdg-covid/databases/(default)/documents/userProfile/{uID}/hospitalBeds/{hID}"
