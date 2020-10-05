import React, { useContext, useEffect } from "react";
import { UserProfileContext } from "../Providers/UserProfileProvider";
import { useParams } from "react-router-dom";
import Post from "./Post";

const UserPostList = () => {

    const { userProfile, GetWithPosts } = useContext(UserProfileContext);
    const { id } = useParams();

    useEffect(() => {
        GetWithPosts(id);
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="cards-column">
                    <h3>{userProfile.name}</h3>

                    {userProfile.post.map((p) => (
                        <Post key={p.id} p={p} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserPostList;