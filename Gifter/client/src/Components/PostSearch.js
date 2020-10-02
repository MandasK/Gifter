import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "../Providers/PostProvider";
import Post from "./Post";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { getAllByAltText } from "@testing-library/react";

const PostSearch = () => {
    const [search, setSearch] = useState("");
    const { searchPosts, getAllPosts } = useContext(PostContext);

    const handleFieldChange = evt => {
        const stateToChange = { ...search }
        stateToChange[evt.target.id] = evt.target.value;
        setSearch(stateToChange);
    }

    const Search = evt => {
        evt.preventDefault();
        searchPosts(search);
    }



    return (
        <>
            <Form className="dashForm recipeListSearch">
                <FormGroup>
                    <Label for="search">Title</Label>
                    <Input type="text" name="search" id="search" placeholder="Enter Search" onChange={handleFieldChange} />
                </FormGroup>
                <Button onClick={Search} type="submit">Search</Button>
            </Form>
        </>
    )
}

export default PostSearch;