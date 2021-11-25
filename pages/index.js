import Head from 'next/head';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import { Layout } from '../components';

import FeaturedPosts from '../sections/FeaturedPosts';

export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <div className="container mx-auto px-10 mb-8">
          <FeaturedPosts />
          <Head>
            <title>Uton Blog</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="grid lg:grid-cols-12 gap-12 grid-cols-1">
            <div className="lg:col-span-8 col-span-1">
              {posts.map((post) => <PostCard post={post.node} key={post.node.slug} /> )}
            </div>
            <div className="lg:col-span-4 col-span-1">
                <div className="lg:sticky relative top-8">
                  <PostWidget />
                  <Categories />              
                </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}