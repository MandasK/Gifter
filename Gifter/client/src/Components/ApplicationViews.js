import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../Providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import PostList from "./PostList";
import PostForm from "./PostForm";
import PostDetails from "./PostDetails";
import UserPostList from './UserPostList';

const ApplicationViews = () => {
    const { isLoggedIn } = useContext(UserProfileContext);
    return (
        <Switch>
            <Route path="/" exact>
                {isLoggedIn ? <PostList /> : <Redirect to="/login/" />}
            </Route>

            <Route path="/posts/add">
                {isLoggedIn ? <PostForm /> : <Redirect to="/login/" />}
            </Route>

            <Route path="/posts/:id">
                <PostDetails />
            </Route>

            <Route path="/login">
                <Login />
            </Route>

            <Route path="/register">
                <Register />
            </Route>

            {/* <Route path="/userProfile/:id/GetWithPosts">
                <UserPostList />
            </Route> */}
        </Switch>
    );
};

export default ApplicationViews;