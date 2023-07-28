import { HeadLinksComponent } from '@/components/HeadLinksComponent';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import { AsideMenu } from '@/components/AsideMenu';
import { PostSender } from '@/components/PostSender';
import axios from 'axios';
import { getPost } from '@/services/api';
import { useEffect, useState } from 'react';
import { Post } from '@/models/types';
import { PostComponent } from '@/components/PostComponent';
export default function HomePage() {
    const [post, setPost] = useState<Array<Post>>();
    const router = useRouter();

    const handleLogout = () => {
        router.push("/");
        axios.defaults.headers.common['Authorization'] = undefined;
    }

    const handleHomePage = () => {
        router.push("/homepage");
        handleGetPostData();
    }

    const handleGetPostData = () => {
        getPost()
        .subscribe({
            next: (value: any) => {
                setPost(value['message']);
            },
            complete: () => {
                
            },
            error: () => {

            }
        })
    }

    useEffect(() => {
        handleGetPostData();
    }, []);

    return (
        <main className={styles.main}>
            <HeadLinksComponent title='HomePage' />
            <nav className={styles.nav}>
                <div className={styles.navDivA}>
                    <button
                        className={styles.mainButton}
                        onClick={handleHomePage}>
                        SocialNetwork
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