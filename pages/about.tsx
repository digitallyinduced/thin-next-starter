import { query ,AuthUser, ensureIsUser, getCurrentUser, initIHPBackend } from 'ihp-backend';
import { useQuery, useCurrentUser } from 'ihp-backend/react';
import { useEffect, useState } from 'react';

initIHPBackend({ host: process.env.NEXT_PUBLIC_BACKEND_URL });

function Blog({}) {
    const user = useCurrentUser();

    return <div>
        <div>Hello {user?.email}</div>
    </div>
}

/* EXAMPLE:
function Posts() {
    const posts = useQuery(query('posts'));
    if (posts === null) {
        return <div>Loading</div>
    }
    return <div>{posts.map(post => <Post post={post} key={post.id} />)}</div>
}

interface PostProps {
    post: Post;
}

function Post({ post }: PostProps) {
    return <div>{post.title}</div>
}
*/

export default Blog;