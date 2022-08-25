import React from 'react';
import PostHeader from './post-header';

import ReactMarkdown from 'react-markdown';

import styles from './post-content.module.css';

const DUMMY_POST = {
  slug: 'getting-started-with-nextjs',
  title: 'Getting Started With NextJS',
  image: 'getting-started-nextjs.png',
  content: '# This is a first post',
  date: '2022-08-24',
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
