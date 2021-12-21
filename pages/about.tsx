import { ensureIsUser, getCurrentUser, useCurrentUser, User } from 'ihp-backend';
import { initIHPBackend } from 'ihp-datasync/ihp-datasync';
import { useQuery } from 'ihp-datasync/ihp-datasync-react';
import { Post, query } from 'ihp-datasync/ihp-querybuilder';
import { useEffect, useState } from 'react';

initIHPBackend({ host: 'https://qjdtmcomwbfoofsvrcqpajmfcgmwfxzd.di1337.com' })

function Blog({}) {
    const [isLoggedIn, setLoggedIn] = useState<User | null>(null);

    useEffect(() => {
        ensureIsUser().then(() => {
            const user = getCurrentUser();
            setLoggedIn(user);
        });
    }, []);

    return <div>
        <div>Hello {isLoggedIn?.email}</div>
        <Posts/>
    </div>
}

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

export default Blog;