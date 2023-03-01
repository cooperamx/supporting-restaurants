import Image from 'next/image';
import Link from 'next/link';

import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />

      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <div className='px-4'>
          <Image className='rounded-lg' src="/banner.png" alt="me" width="1600" height="900" />
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col items-center justify-center bg-white bg-opacity-30 dark:bg-opacity-20 backdrop-blur-lg rounded-lg p-4 m-4 border-solid border-2 border-cyan-400">
              <a target="_blank" href="https://forms.gle/KnLy3ysJAwRyojG48" className="flex items-center py-6 mx-4" rel="noreferrer">
                <span className="font-bold text-5xl">📝 Registro</span>
              </a>
          </div>
        </div>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="mb-4 md:rounded-t-lg md:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >

              <div className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
                
              >
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  </Link>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                 
                 <div className="flex flex-col">
  
                  <a href={`https://chat.whatsapp.com/En25YNkJVFAANToWOOj1si`} className="flex items-center py-6">
                    <span className="font-bold">💬 Grupo de whatsapp</span>{' '}
                    <ArrowIcon className="ml-2" />
                  </a>
                  </div>
                </div>
            </li>
          ))}
        </ul>

        <div className="fixed bottom-0 right-0 m-4 z-10">
          <a
            href="https://chat.whatsapp.com/En25YNkJVFAANToWOOj1si"
            target="_blank"
            rel="noopener noreferrer"
           >
            <Image src="/whatsapp.png" alt="whatsapp" width="60" height="60" />
           </a>
        </div>

      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
