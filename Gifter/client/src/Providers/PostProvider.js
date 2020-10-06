import React, { useState, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const PostContext = React.createContext();

export function PostProvider(props) {
    const [posts, setPosts] = useState([]);
    const { getToken } = useContext(UserProfileContext);

    const getAllPosts = () =>
        getToken().then((token) =>
            fetch("/api/post/GetWithComments",
                {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }).then((res) => res.json())
                .then(setPosts));


    const GetWithComments = (id) =>
        getToken().then((token) =>
            fetch(`/api/post/${id}/GetWithComments`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => res.json()));


    const addPost = (post) =>
        getToken().then((token) =>
            fetch("/api/post", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            }).then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error("Unauthorized");
            }));


    const searchPosts = (search) => {
        return fetch(`api/post/search?q=${search}&sortDesc=true`)
            .then((res) => res.json())
            .then(setPosts);
    };

    return (
        <PostContext.Provider value={{ posts, getToken, getAllPosts, addPost, GetWithComments, searchPosts }}>
            {props.children}
        </PostContext.Provider>
    );
};