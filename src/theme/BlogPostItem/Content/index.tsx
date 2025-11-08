import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {blogPostContainerID} from '@docusaurus/utils-common';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import MDXContent from '@theme/MDXContent';
import type {Props} from '@theme/BlogPostItem/Content';
import styles from '../styles.module.css';

export default function BlogPostItemContent({
  children,
  className,
}: Props): ReactNode {
  const {isBlogPostPage} = useBlogPost();
  
  // Add description styling for card view
  const contentClass = !isBlogPostPage 
    ? clsx('markdown', styles.blogPostDescription, className)
    : clsx('markdown', className);
    
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={contentClass}>
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
