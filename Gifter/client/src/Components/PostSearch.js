import React, { useContext, useState } from "react";
import { PostContext } from "../Providers/PostProvider";
import { Form, FormGroup, Input, Button } from "reactstrap";

const PostSearch = () => {
    const [search, setSearch] = useState("");
    const { searchPosts } = useContext(PostContext);

    const handleFieldChange = evt => {
        const stateToChange = evt.target.value;
        setSearch(stateToChange);
    };

    const newSearch = evt => {
        searchPosts(search);
    };



    return (
        <>
            <h3>Search!</h3>
            <Form className="dashForm recipeListSearch">
                <FormGroup>
                    <Input type="text" name="Search" id="Search" placeholder="Enter Search" onChange={handleFieldChange} />
                </FormGroup>
                <Button onClick={newSearch}>Search!</Button>{' '}
            </Form>
        </>
    )
};

export default PostSearch;