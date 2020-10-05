import React, { useState } from "react";

export const UserProfileContext = React.createContext();

export const UserProfileProvider = (props) => {
    const [userProfile, setUserProfile] = useState([]);

    const GetAllUsers = () => {
        return fetch("/api/userProfile/")
            .then((res) => res.json())
            .then();
    }
    const GetWithPosts = (id) => {
        return fetch(`/api/userProfile/${id}/GetWithPosts`)
            .then((res) => res.json(setUserProfile));
    }

    return (
        <UserProfileContext.Provider value={{ userProfile, GetWithPosts, GetAllUsers }}>
            {props.children}
        </UserProfileContext.Provider>
    );
};