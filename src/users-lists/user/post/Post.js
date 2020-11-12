import { useState, useEffect, useContext } from "react"
import { AppContext } from "../../../AppContext";

async function fetchFirstPost(userId) {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const json = await result.json();
    return json[0];
}

export function Post() {

    const [post, setPost] = useState(null);
    const context = useContext(AppContext);

    useEffect(() => {
        const get = async () => {
            setPost(await fetchFirstPost(context.selectedUser));
        }

        get();
    }, [context.selectedUser]);

    if(!post || !context.selectedUser) return <div>Loading post...</div>;

    return <div className="user-post">
        <button onClick={() => context.sayHello()}>Click me!</button>
        { post.body }
    </div>
}