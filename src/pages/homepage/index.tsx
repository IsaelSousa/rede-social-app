import { HeadLinksComponent } from '@/components/HeadLinksComponent';
import styles from './styles.module.css';
import { useRouter } from 'next/router';
import { AsideMenu } from '@/components/AsideMenu';

export default function HomePage() {

    const router = useRouter();

    const handleLogout = () => {
        router.push("/");
    }

    const handleHomePage = () => {
        router.push("/homepage");
    }

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

                </main>
            </div>
        </main>
    )
}