import Remote from "UserManagementTeam/App"
import React from 'react'
import ComponentAdapter from "../Adapters/ComponentAdapter";

export default function UserProfilePage() {
    const vueComponentProps = {
        profile:{
        "id": "a847e653-1717-46c4-af11-2820ca730f2d",
        "aud": "authenticated",
        "role": "authenticated",
        "email": "noorhonjol09@gmail.com",
        "email_confirmed_at": "2024-08-25T22:00:52.237527Z",
        "phone": "",
        "confirmation_sent_at": "2024-08-25T22:00:41.519807Z",
        "confirmed_at": "2024-08-25T22:00:52.237527Z",
        "last_sign_in_at": "2024-08-25T22:00:52.26174Z",
        "app_metadata": {
            "provider": "email",
            "providers": [
                "email"
            ]
        },
        "user_metadata": {
            "email": "noorhonjol09@gmail.com",
            "email_verified": false,
            "phone_verified": false,
            "sub": "a847e653-1717-46c4-af11-2820ca730f2d"
        },
        "identities": [
            {
                "identity_id": "af20187d-36d5-4d8e-9450-b3a74075b4a3",
                "id": "a847e653-1717-46c4-af11-2820ca730f2d",
                "user_id": "a847e653-1717-46c4-af11-2820ca730f2d",
                "identity_data": {
                    "email": "noorhonjol09@gmail.com",
                    "email_verified": false,
                    "phone_verified": false,
                    "sub": "a847e653-1717-46c4-af11-2820ca730f2d"
                },
                "provider": "email",
                "last_sign_in_at": "2024-08-25T22:00:41.509025Z",
                "created_at": "2024-08-25T22:00:41.509077Z",
                "updated_at": "2024-08-25T22:00:41.509077Z",
                "email": "noorhonjol09@gmail.com"
            }
        ],
        "created_at": "2024-08-25T22:00:41.498535Z",
        "updated_at": "2024-08-25T22:00:52.388566Z",
        "is_anonymous": false
    }
    };
    
    return (
        <ComponentAdapter framework={'vue'} Component={Remote} props={vueComponentProps}/>
    )
}
