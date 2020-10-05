import React from "react";
import { Switch, Route } from "react-router-dom";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetails from "./PostDetails";
import UserPostList from './UserPostList';

const ApplicationViews = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <PostList />
            </Route>

            <Route path="/posts/add">
                <PostForm />
            </Route>

            <Route path="/posts/:id">
                <PostDetails />
            </Route>
            <Route path="/userProfile/:id/GetWithPosts">
                <UserPostList />
            </Route>
        </Switch>
    );
};

export default ApplicationViews;