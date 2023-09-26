import { HeadLinksComponent } from '@/components/shared/HeadLinksComponent/HeadLinksComponent';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import { AsideMenu } from '@/components/AsideMenu/AsideMenu';
import { PostSender } from '@/components/PostSender/PostSender';
import axios from 'axios';
import { getPost } from '@/services/api';
import { useEffect, useState } from 'react';
import { Post } from '@/models/types';
import { PostComponent } from '@/components/PostComponent/PostComponent';
import { useDispatch, useSelector } from '@/context/provider';
import { Loader } from '@/components/Loader/Loader';

export default function HomePage() {
  const [post, setPost] = useState<Array<Post>>([]);
  const { data, loader } = useSelector((store) => { return store });

  const router = useRouter();
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    router.push('/');
    axios.defaults.headers.common['Authorization'] = undefined;
  }

  const handleHomePage = () => {
    if (router.asPath != "/homepage") {
      router.push('/homepage'); 
    }
    handleGetPostData();
  }

  const handleGetPostData = () => {
    getPost()
      .subscribe({
        next: (value: any) => {
          const payload = { data: value['message'] };
          dispatch({ type: 'SET_POST', payload });
          dispatch({ type: 'SET_LOADER', payload: true });
          console.log('initial');
        },
        complete: () => {
          console.log('complete');
          // setTimeout(() => {
          //   dispatch({ type: 'SET_LOADER', payload: false });
          // }, 5000);
        },
        error: () => {

        }
      });
  }

  useEffect(() => setPost(data ? data['data'] : []), [data]);

  useEffect(() => {
    handleGetPostData();
  }, []);

  return (
    <main className={styles.main}>
      <HeadLinksComponent title='HomePage' />
      <Loader active={loader} />

      <nav className={styles.nav}>
        <div className={styles.navDivA}>
          <button
            className={styles.mainButton}
            onClick={handleHomePage}>
            Social Network
          </button>
        </div>
        <div className={styles.navDivB}></div>
        <div className={styles.navDivC}></div>
        <div className={styles.navDivD}>
          <button
            className={styles.logoutButton}
            onClick={handleLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className={styles.content}>
        <aside className={styles.asideContent}>
          <AsideMenu />
        </aside>
        <main className={styles.mainContent}>
          <PostSender />

          <div className={styles.postContent}>
            {
              post?.map((vl: Post, idx: number) => <PostComponent key={idx} post={vl} />)
            }
          </div>
        </main>
      </div>
    </main>
  )
}