import React, {type ReactNode, useState, useMemo} from 'react';
import clsx from 'clsx';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/BlogListPage';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import styles from './styles.module.css';

function BlogListPageMetadata(props: Props): ReactNode {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): ReactNode {
  const {metadata, items, sidebar} = props;
  const [searchQuery, setSearchQuery] = useState('');

  // Filter blog posts based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      return items;
    }
    
    const query = searchQuery.toLowerCase();
    return items.filter((item) => {
      const {title, description, tags} = item.content.metadata;
      const titleMatch = title?.toLowerCase().includes(query);
      const descriptionMatch = description?.toLowerCase().includes(query);
      const tagsMatch = tags?.some((tag) => 
        tag.label?.toLowerCase().includes(query)
      );
      
      return titleMatch || descriptionMatch || tagsMatch;
    });
  }, [items, searchQuery]);

  return (
    <BlogLayout sidebar={sidebar}>
      <div className={styles.blogListContainer}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search articles by title, description, or tags..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search blog posts"
          />
        </div>
        
        {searchQuery && (
          <div style={{ textAlign: 'center', marginBottom: '1.5rem', color: 'var(--ifm-color-emphasis-700)' }}>
            {filteredItems.length > 0 
              ? `Found ${filteredItems.length} article${filteredItems.length !== 1 ? 's' : ''}`
              : 'No articles found'}
          </div>
        )}

        <div className={styles.blogGrid}>
          <BlogPostItems items={filteredItems} />
        </div>
        
        {!searchQuery && <BlogListPaginator metadata={metadata} />}
      </div>
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
