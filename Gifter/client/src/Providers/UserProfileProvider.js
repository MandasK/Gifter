import React, { useState } from "react";

export const UserProfileContext = React.createContext();

export const UserProfileProvider = (props) => {
    const [userProfile, setUserProfile] = useState([]);

    const GetAllUsers = () => {
        return fetch("/api/userProfile/")
            .then((res) => res.json())
            .then(setUserProfile);
    }
    const GetWithPosts = (id) => {
        return fetch(`/api/userProfile/${id}/GetWithPosts`)
            .then((res) => res.json());
    }

    return (
        <UserProfileContext.Provider value={{ userProfile, GetWithPosts, GetAllUsers }}>
            {props.children}
        </UserProfileContext.Provider>
    );
};