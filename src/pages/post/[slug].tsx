import parseJSON from 'date-fns/parseJSON';
import { GetStaticPaths, GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  console.log(post);
  return (
    <>
      <Header />
      <img src="/eatSleepCode.svg" alt="logo" className={styles.banner} />

       <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1 className={styles.title}>Criando um app CRA do zero</h1>
            <strong></strong>
            <ul className={styles.post}>
              <li>
                <FiCalendar />
                13 maio 2020
              </li>
              <li>
                <FiUser />
                Rodrigo Camargo
              </li>
              <li>
                <FiClock />4 min
              </li>
            </ul>
          </div>
          {post.data.content.map(content => {
            return (
              <article key={content.heading}>
                <h2>{content.heading}</h2>
                <div
                  className={styles.postContent}
                  dangerouslySetInnerHTML={{
                    __html: RichText.asHtml(content.body),
                  }}
                />
              </article>
            );
          })}
        </div>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const prismic = getPrismicClient({});
  // const posts = await prismic.getByType();
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient({});
  const { slug } = context.params;
  const response = await prismic.getByUID('posts', String(slug), {});

  const post = {
    uid: response.uid,
    first_publication_date: response.first_publication_date,
    data: {
      title: response.data.title,
      subtitle: response.data.subtitle,
      author: response.data.author,
      banner: {
        url: response.data.banner.url,
      },
      content: response.data.content.map(content => {
        return{
          heading: content.heading,
          body:[...content.body],
        }
      })
    },
  };

  return {
    props: {
      post,
    },
  };
};
