import React, { useState } from "react";

export const PostContext = React.createContext();

export const PostProvider = (props) => {
    const [posts, setPosts] = useState([]);

    const getAllPosts = () => {
        return fetch("/api/post/GetWithComments")
            .then((res) => res.json())
            .then(setPosts);
    };

    const GetWithComments = (id) => {
        return fetch(`/api/post/${id}/GetWithComments`).then((res) => res.json());
    };

    const addPost = (post) => {
        return fetch("/api/post", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(post),
        });
    };

    const searchPosts = (search) => {
        return fetch(`api/post/search?q=${search}&sortDesc=true`)
            .then((res) => res.json())
            .then(setPosts);
    };

    return (
        <PostContext.Provider value={{ posts, getAllPosts, addPost, GetWithComments, searchPosts }}>
            {props.children}
        </PostContext.Provider>
    );
};