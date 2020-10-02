import React, { useContext, useState } from "react";
import { PostContext } from "../Providers/PostProvider";
import Post from "./Post";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { getAllByAltText } from "@testing-library/react";

const PostForm = () => {
    const [post, setPost] = useState({ title: "", imageUrl: "", caption: "", dateCreated: "", userProfileId: 1 });
    const { getAllPosts, addPost } = useContext(PostContext);

    const handleFieldChange = evt => {
        const stateToChange = { ...post }
        stateToChange[evt.target.id] = evt.target.value;
        setPost(stateToChange);
    }

    const ConstructPost = evt => {
        evt.preventDefault();
        addPost(post).then(() => {
            getAllPosts()
        })
    };

    return (
        <>
            <Form>
                <FormGroup>
                    <Label for="title">Title</Label>
                    <Input type="text" name="title" id="title" placeholder="Enter Title" onChange={handleFieldChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="imageUrl">Image URL</Label>
                    <Input type="text" name="imageUrl" id="imageUrl" placeholder="Enter Image URL" onChange={handleFieldChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="caption">Caption</Label>
                    <Input type="text" name="caption" id="caption" placeholder="Enter Caption" onChange={handleFieldChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="dateCreated">Date Created</Label>
                    <Input type="datetime-local" name="dateCreated" id="dateCreated" onChange={handleFieldChange} />
                </FormGroup>

                <Button onClick={ConstructPost} type="submit">Add Post</Button>
            </Form>
        </>
    )
};

export default PostForm;