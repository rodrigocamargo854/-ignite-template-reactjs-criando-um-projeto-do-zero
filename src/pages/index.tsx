import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import { FiCalendar, FiUser } from 'react-icons/fi';

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home() {
  return (
    <>
      <main className={commonStyles.container}>
        <Header />
        <div className={styles.posts}>
          <Link href="/">
            <a className={styles.post}>
              <strong>Como Utilizar Hooks</strong>
              <p>Pensando em sincronização em vez de ciclos de vida.</p>
              <ul>
                <li>
                  <FiCalendar />
                  15 mar 2201
                </li>
                <li>
                  <FiUser />
                  Rodrigo Camargo
                </li>
              </ul>
            </a>
          </Link>

        </div>
      </main>
    </>
  );
}

// export const getStaticProps = async () => {
// const prismic = getPrismicClient({});
// const postsResponse = await prismic.getByType(TODO);
// TODO
// };
