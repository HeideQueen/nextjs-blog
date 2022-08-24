import React from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for production -  it makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering',
    date: '2022-08-24',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for production -  it makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering',
    date: '2022-08-24',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for production -  it makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering',
    date: '2022-08-24',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'Getting Started With NextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the React Framework for production -  it makes building fullstack React apps and sites a breeze and ships with built-in server-side rendering',
    date: '2022-08-24',
  },
];

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}

export default HomePage;
