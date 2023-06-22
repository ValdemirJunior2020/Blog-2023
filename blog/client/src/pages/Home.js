import React, { useEffect, useState } from 'react';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch the list of blog posts from the server and update the state
    // For example:
    fetch('/api/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <a href={`/blog/${post.id}`}>Read More</a>
        </div>
      ))}
    </div>
  );
}

export default Home;
