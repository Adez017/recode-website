import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import type {Props} from '@theme/BlogPostItem';
import styles from './styles.module.css';

// apply a bottom margin in list view
function useContainerClassName() {
  const {isBlogPostPage} = useBlogPost();
  return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}

export default function BlogPostItem({children, className}: Props): ReactNode {
  const containerClassName = useContainerClassName();
  const {metadata, isBlogPostPage} = useBlogPost();
  
  // For list view, render as a card with tags
  if (!isBlogPostPage) {
    const {tags} = metadata;
    
    return (
      <BlogPostItemContainer className={clsx(containerClassName, className)}>
        <div className={styles.blogPostContent}>
          <BlogPostItemHeader />
          <BlogPostItemContent>{children}</BlogPostItemContent>
          <BlogPostItemFooter />
          
          {/* Add tags if available */}
          {tags && tags.length > 0 && (
            <div className={styles.blogPostTags}>
              {tags.map((tag) => (
                <a
                  key={tag.permalink}
                  href={tag.permalink}
                  className={styles.blogPostTag}
                >
                  {tag.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </BlogPostItemContainer>
    );
  }
  
  // For individual post page, use default layout
  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
