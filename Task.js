// Simulated asynchronous functions for creating a post, updating last activity time, and deleting a post.
function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(post);
    }, 1000);
  });
}

function updateLastUserActivityTime(user) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lastActivityTime = new Date().toISOString();
      resolve(lastActivityTime);
    }, 1000);
  });
}

function deletePost(postId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(postId);
    }, 1000);
  });
}

// Main function to handle the flow
async function main() {
  try {
    // Assume you have a user object containing user information
    const user = {
      id: 1,
      name: 'AC',
    };

    // Create a new post and update the last activity time
    const post = await createPost({ title: 'New post', content: 'Hello, world!' });
    const lastActivityTime = await updateLastUserActivityTime(user);

    console.log('Posts created:', [post]);
    console.log('Last Activity Time:', lastActivityTime);

    // Delete the last post
    const deletedPostId = await deletePost(post.id);

    console.log('Post deleted:', deletedPostId);

    // After successful deletion, log the new set of posts of the user
    const newPosts = []; // Fetch the new set of posts here (e.g., from a database)
    console.log('New set of Posts:', newPosts);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();
