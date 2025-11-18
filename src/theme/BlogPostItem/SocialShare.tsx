import React, {type ReactNode} from 'react';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';

interface ShareButtonProps {
  url: string;
  title: string;
  platform: 'twitter' | 'linkedin' | 'facebook' | 'reddit';
}

function ShareButton({url, title, platform}: ShareButtonProps) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    reddit: `https://reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
  };

  const labels = {
    twitter: '𝕏',
    linkedin: 'in',
    facebook: 'f',
    reddit: 'r',
  };

  const colors = {
    twitter: '#1DA1F2',
    linkedin: '#0077B5',
    facebook: '#1877F2',
    reddit: '#FF4500',
  };

  return (
    <a
      href={shareUrls[platform]}
      target="_blank"
      rel="noopener noreferrer"
      className="share-button"
      style={{'--share-color': colors[platform]} as React.CSSProperties}
      aria-label={`Share on ${platform}`}
    >
      {labels[platform]}
    </a>
  );
}

export default function SocialShare(): ReactNode {
  const {metadata} = useBlogPost();
  const {title, permalink} = metadata;
  const url = typeof window !== 'undefined' 
    ? window.location.origin + permalink 
    : `https://www.recodehive.com${permalink}`;

  return (
    <div className="social-share-container">
      <h4 className="social-share-title">Share this article</h4>
      <div className="social-share-buttons">
        <ShareButton url={url} title={title} platform="twitter" />
        <ShareButton url={url} title={title} platform="linkedin" />
        <ShareButton url={url} title={title} platform="facebook" />
        <ShareButton url={url} title={title} platform="reddit" />
      </div>
    </div>
  );
}
