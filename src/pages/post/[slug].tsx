import { GetStaticPaths, GetStaticProps } from 'next';
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
          <article>
            <h2>Titulo Seção</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius,
              placeat, atque fugiat corporis explicabo vero illum molestias
              minima non esse eum veritatis eligendi, harum repellat velit
              perferendis quo maxime quibusdam totam! Laboriosam unde magni non
              eaque ex? <strong>perspiciatis</strong>Sunt officiis soluta ullam
              magni tempore minimablanditiisblanditiisblanditiisblanditiis
              quisquam, perspiciatis corrupti error blanditiis eligendi
              repellendus, maxime nemo quas iste vitae doloremque quos!
              <a href="#">link dinâmico</a>accusamus dolores sunt, possi
              Excepturi accusamus dolores sunt, possimus ut quibusdam corporis
              quas perspiciatis iure aperiam, minima iste, magni nihil neque!
              Modi excepturi illum similique necessitatibus!Excepturi accusamus
              dolores sunt, possimus ut quibusdam corporis quas perspiciatis
              iure aperiam, minima iste, magni nihil neque! Modi excepturi illum
              similique necessitatibus!Excepturi accusamus dolores sunt,
              possimus ut quibusdam corporis quas perspiciatis iure aperiam,
              minima iste, magni nihil neque! Modi excepturi illum similique
              necessitatibus!Excepturi accusamus dolores sunt, possimus ut
              quibusdam corporis quas perspiciatis iure aperiam, minima iste,
              magni nihil neque! Modi excepturi illum similique necessitatibus!
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient({});
//   const posts = await prismic.getByType(TODO);

//   // TODO
// };

// export const getStaticProps = async ({params }) => {
//   const prismic = getPrismicClient({});
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
