import React, { useState, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import blogs from "../../database/blogs/index";
import Head from "@docusaurus/Head";
import PageHero from "@site/src/components/PageHero";

import "./blogs-new.css";

// Author mapping based on actual blog posts
const authorMapping = {
  "streamline-ux-ui": ["Sowmiya Venketashan", "Sanjay Viswanthan"],
  "ux-ui-design-job": ["Sowmiya Venketashan", "Sanjay Viswanthan"],
  "ux-designers-ai": ["Sowmiya Venketashan", "Sanjay Viswanthan"],
  "google-deepmind": ["Sowmiya Venketashan", "Sanjay Viswanthan"],
  "google-backlinks": ["Sanjay Viswanthan"],
  "git-coding-agent": ["Sanjay Viswanthan"],
  "spark-architecture": ["Aditya Singh Rathore", "Sanjay Viswanthan"],
  "n8n-workflow-automation": ["Aditya Singh Rathore"],
};

// Get unique categories from blogs
const getUniqueCategories = () => {
  const categories = blogs.map((blog) => blog.category);
  return Array.from(new Set(categories)).sort();
};

export default function Blogs(): React.JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredBlogs, setFilteredBlogs] = useState(blogs);

  const categories = ["All", ...getUniqueCategories()];

  // Filter blogs based on search term and category
  useEffect(() => {
    let filtered = blogs;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.tags?.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
      );
    }

    setFilteredBlogs(filtered);
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
  };

  return (
    <Layout
      title={`Blogs from ${siteConfig.title}`}
      description="Welcome to recode hive Blogs. Learn the basics to advanced concepts of web development including HTML, CSS, JavaScript, React, Node.js, DSA, and more."
    >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PageHero
        badge="✍️ Articles · Tutorials · Insights"
        title={
          <>
            recode hive{" "}
            <span className="ph__accent">Blogs</span>
          </>
        }
        subtitle="Discover comprehensive web development articles, tutorials, and insights — from HTML & CSS fundamentals to advanced JavaScript, React, Node.js, DSA, and cutting-edge technologies."
      />

      <div className="blog-page">

        {/* Latest Articles Section */}
        <section className="latest-articles-section">
          <div className="articles-container-wrapper">
            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-section">
                <h3 className="sidebar-title">
                  <svg
                    className="sidebar-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  Search
                </h3>
                <div className="sidebar-search-wrapper">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="sidebar-search-input"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {searchTerm && (
                    <button
                      className="sidebar-clear-btn"
                      onClick={() => setSearchTerm("")}
                      aria-label="Clear search"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  )}
                </div>
              </div>

              <div className="sidebar-section">
                <h3 className="sidebar-title">
                  <svg
                    className="sidebar-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                  Categories
                </h3>
                <div className="category-list">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`category-item ${selectedCategory === category ? "active" : ""}`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      <span className="category-name">{category}</span>
                      <span className="category-count">
                        {category === "All"
                          ? blogs.length
                          : blogs.filter((blog) => blog.category === category)
                              .length}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {(searchTerm || selectedCategory !== "All") && (
                <div className="sidebar-section">
                  <button
                    className="clear-filters-btn"
                    onClick={handleClearFilters}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="clear-icon"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                    Clear All Filters
                  </button>
                </div>
              )}
            </aside>

            {/* Main Content */}
            <div className="articles-main-content">
              {/* Search Results Counter */}
              {(searchTerm || selectedCategory !== "All") && (
                <div className="search-results-info">
                  <p>
                    {filteredBlogs.length > 0
                      ? `Found ${filteredBlogs.length} article${filteredBlogs.length !== 1 ? "s" : ""}`
                      : `No articles found`}
                    {selectedCategory !== "All" &&
                      ` in ${selectedCategory}`}
                    {searchTerm && ` for "${searchTerm}"`}
                  </p>
                </div>
              )}

              <div className="articles-grid">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog, index) => (
                    <BlogCard key={blog.id} blog={blog} index={index} />
                  ))
                ) : (
                  <div className="no-results">
                    <div className="no-results-content">
                      <div className="no-results-icon">🔍</div>
                      <h3>No articles found</h3>
                      <p>
                        Try adjusting your search terms or browse all articles.
                      </p>
                      <button
                        className="clear-search-btn"
                        onClick={handleClearFilters}
                      >
                        Clear Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

const BlogCard = ({ blog, index }) => {
  // Get authors for this blog post
  const getAuthors = (slug) => {
    const authors = authorMapping[slug] || ["recode hive Team"];
    return authors.length > 1 ? authors.join(" & ") : authors[0];
  };

  const authorName = getAuthors(blog.slug);

  return (
    <div className="article-card">
      <div className="card-category">{blog.category}</div>
      <div className="card-image">
        <img src={blog.image} alt={blog.title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{blog.title}</h3>
        <p className="card-description">{blog.description}</p>
        <div className="card-meta">
          <div className="card-author">
            <span className="author-avatar">👤</span>
            <span className="author-name" data-full-name={authorName}>
              {authorName}
            </span>
          </div>
          <span className="card-read-time">5 min read</span>
        </div>
        <Link to={`/blog/${blog.slug}`} className="card-read-more">
          Read Article →
        </Link>
      </div>
    </div>
  );
};
