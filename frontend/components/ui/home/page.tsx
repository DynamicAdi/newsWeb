import React from 'react'
import styles from './styles.module.scss';
import FadeCarousel from '../MenuCard/page';
import { getPost } from '@/lib/calls';
import { dataProps } from '@/lib/types';
import Header from '@/components/core/header/page';

async function HomeSection() {
  const posts:dataProps[] = await getPost('banner');
  return (
    <div className={styles.container}>
      {/* <UpperSection /> */}
      <Header />
              <div className={styles.child}>
            <FadeCarousel data={posts} />
        </div>
    </div>
  )
}

export default HomeSection