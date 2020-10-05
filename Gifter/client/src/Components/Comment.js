import React, { useState, useEffect } from 'react'
import { ListGroupItem } from 'reactstrap'

const Comment = ({ comment }) => {
    const [userProfile, setUserProfile] = useState({});

    useEffect(() => {
        return fetch(`/api/userprofile/${comment.userProfileId}`)
            .then((res) => res.json())
            .then(setUserProfile)
    }, []);

    return (
        <>
            <ListGroupItem>
                <p>{comment.message}</p>
                <p>{userProfile.name}</p>
            </ListGroupItem>
        </>
    )
};

export default Comment