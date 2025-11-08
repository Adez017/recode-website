import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import type {Props} from '@theme/BlogPostItem/Container';
import styles from '../styles.module.css';

export default function BlogPostItemContainer({
  children,
  className,
}: Props): ReactNode {
  const {isBlogPostPage} = useBlogPost();
  
  // Apply card styling only for blog list pages, not individual post pages
  const containerClass = !isBlogPostPage 
    ? clsx(styles.blogPostCard, className)
    : className;
    
  return <article className={containerClass}>{children}</article>;
}
