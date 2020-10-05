import React from "react";
import { Card, CardImg, CardBody, ListGroup } from "reactstrap";
import { Link } from "react-router-dom";


const Post = ({ post }) => {
    return (
        <Card className="m-4">
            <Link to={`userProfile/${post.userProfile.id}/GetWithPosts`}>
                <p className="text-left px-2">Posted by: {post.userProfile.name}</p>
            </Link>
            <CardImg top src={post.imageUrl} alt={post.title} />
            <CardBody>
                <p>
                    <Link to={`/posts/${post.id}`}>
                        <strong>{post.title}</strong>
                    </Link>
                </p>

            </CardBody>
        </Card>
    );
};

export default Post;