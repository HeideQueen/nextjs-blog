import React from 'react';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

function PostDetailPage({ post }) {
  return <PostContent post={post} />;
}

export async function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postSlug = params.slug;

  const loadedPost = getPostData(postSlug);

  return {
    props: {
      post: loadedPost,
    },
    revalidate: 600,
  };
}

export default PostDetailPage;
