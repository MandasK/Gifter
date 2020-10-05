import React, { useEffect, useContext, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { PostContext } from "../Providers/PostProvider";
import { useParams } from "react-router-dom";
import Post from "./Post";

const PostDetails = () => {
    const [post, setPost] = useState();

    const { GetWithComments } = useContext(PostContext);
    const { id } = useParams();

    useEffect(() => {
        GetWithComments(id).then(setPost);
    }, []);


    if (!post) {
        return null;
    }

    return (

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-12 col-lg-6">
                    <Post post={post} />
                    <ListGroup>
                        {post.comments.map((c) => (
                            <>
                                <p>{c.message}</p>
                            </>
                        ))}
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;