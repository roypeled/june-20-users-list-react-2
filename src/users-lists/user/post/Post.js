import { useState, useEffect, useContext } from "react"
import { AppContext } from "../../../AppContext";
import { Comments } from "../../comments/Comments";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

import './post.scss';

async function fetchPosts(userId) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const json = await result.json();
    return json;
}

export function Post() {

    const [posts, setPost] = useState(null);
    const params = useParams();
    const {path, url} = useRouteMatch();
    // path === /users/:userId/posts
    // url ==== /users/1/posts
    
    useEffect(() => {
        const get = async () => {
            setPost(await fetchPosts(params.userId));
        }

        get();
    }, [params.userId]);

    if(!posts || !params.userId) return <div>Loading post...</div>;

    return <div className="user-post">
        <div>
            { 
            posts.map(post => <article>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Link to={`${url}/${post.id}/comments`}>Show comments</Link>
            </article>) 
            }
        </div>

        <Route path={`${path}/:postId/comments`}>
            <Comments></Comments>
        </Route>
    </div>
}