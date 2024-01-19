import { HeadLinksComponent } from '@/components/shared/HeadLinksComponent/HeadLinksComponent';
import styles from './styles.module.css';
import { AsideMenu } from '@/components/AsideMenu/AsideMenu';
import { PostSender } from '@/components/PostSender/PostSender';
import { getPost } from '@/services/api';
import { useEffect, useState } from 'react';
import { Post } from '@/models/types';
import { PostComponent } from '@/components/PostComponent/PostComponent';
import { useDispatch, useSelector } from '@/context/provider';
import { Loader } from '@/components/Loader/Loader';
import { HeaderNavBar } from '@/components/HeaderNavBar/HeaderNavBar';

export default function HomePage() {
  const [post, setPost] = useState<Array<Post>>([]);
  const { data, loader } = useSelector((store) => { return store });

  const dispatch = useDispatch();

  const handleGetPostData = () => {
    getPost()
      .subscribe({
        next: (value: any) => {
          const payload = { data: value };
          dispatch({ type: 'SET_POST', payload });
          dispatch({ type: 'SET_LOADER', payload: true });
        },
        complete: () => {
          setTimeout(() => {
            dispatch({ type: 'SET_LOADER', payload: false });
          }, 500);
        },
        error: () => {
        }
      });
  }

  useEffect(() => handleGetPostData(), []);

  useEffect(() => {
    const value = data;
    setPost(value ? value['data'] : []);
  }, [data]);

  return (
    <main className={styles.main}>
      <HeadLinksComponent title='HomePage' />
      <HeaderNavBar initialButton={() => handleGetPostData()} />

      <div className={styles.content}>
        <aside className={styles.asideContent}>
          <AsideMenu />
        </aside>
        <main className={styles.mainContent}>
          <PostSender />

          <div className={styles.postContent}>
            {loader ? <Loader active={loader} /> : post?.map((vl: Post, idx: number) => <PostComponent key={idx} post={vl} />)}
          </div>
        </main>
        <div className={styles.asideRight}></div>
      </div>
    </main>
  )
}