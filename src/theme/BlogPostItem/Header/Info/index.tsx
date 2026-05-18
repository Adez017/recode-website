import React, {type ReactNode, useEffect, useMemo, useRef, useState} from "react";
import clsx from "clsx";
import {translate} from "@docusaurus/Translate";
import {useBlogPost} from "@docusaurus/plugin-content-blog/client";
import {usePluralForm} from "@docusaurus/theme-common";
import {useDateTimeFormat} from "@docusaurus/theme-common/internal";
import type {Props} from "@theme/BlogPostItem/Header/Info";

import styles from "./styles.module.css";

function useReadingTimePlural() {
  const {selectMessage} = usePluralForm();
  return (readingTimeFloat: number) => {
    const readingTime = Math.ceil(readingTimeFloat);
    return selectMessage(
      readingTime,
      translate(
        {
          id: "theme.blog.post.readingTime.plurals",
          description:
            'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',
          message: "One min read|{readingTime} min read",
        },
        {readingTime},
      ),
    );
  };
}

function useRemainingTimePlural() {
  const {selectMessage} = usePluralForm();
  return (remainingTime: number) =>
    selectMessage(
      remainingTime,
      translate(
        {
          id: "theme.blog.post.remainingTime.plurals",
          description:
            'Pluralized label for "{remainingTime} min remaining". Use as much plural forms (separated by "|") as your language support.',
          message: "One min remaining|{remainingTime} min remaining",
        },
        {remainingTime},
      ),
    );
}

function DateTime({
  date,
  formattedDate,
}: {
  date: string;
  formattedDate: string;
}) {
  return <time dateTime={date}>{formattedDate}</time>;
}

function Spacer() {
  return <>{" · "}</>;
}

function calculateReadingProgress(articleRect: DOMRect): number {
  const articleTopInDocument = window.scrollY + articleRect.top;
  const articleBottomInDocument = articleTopInDocument + articleRect.height;
  const viewportTopInDocument = window.scrollY;
  const viewportBottomInDocument = viewportTopInDocument + window.innerHeight;

  if (viewportBottomInDocument <= articleTopInDocument) {
    return 0;
  }

  if (viewportTopInDocument >= articleBottomInDocument) {
    return 1;
  }

  const totalScrollableDistance = Math.max(1, articleRect.height - window.innerHeight);
  const distanceScrolledFromTop = Math.max(
    0,
    viewportTopInDocument - articleTopInDocument,
  );
  return Math.min(1, distanceScrolledFromTop / totalScrollableDistance);
}

function RemainingTime({readingTime}: {readingTime: number}) {
  const totalMinutes = useMemo(() => Math.max(1, Math.ceil(readingTime)), [readingTime]);
  const [remainingTime, setRemainingTime] = useState(totalMinutes);
  const remainingTimePlural = useRemainingTimePlural();
  const markerRef = useRef<HTMLSpanElement | null>(null);
  const articleElementRef = useRef<HTMLElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const updateRemainingTime = () => {
      let article = articleElementRef.current;
      if (!article) {
        article = markerRef.current?.closest("article") as HTMLElement | null;
        articleElementRef.current = article;
      }
      if (!article) {
        setRemainingTime(totalMinutes);
        return;
      }

      const articleRect = article.getBoundingClientRect();
      if (articleRect.height <= 0) {
        setRemainingTime(totalMinutes);
        return;
      }

      const progress = calculateReadingProgress(articleRect);
      const computedRemaining = Math.ceil(totalMinutes * (1 - progress));
      setRemainingTime(Math.max(0, computedRemaining));
    };

    const handleScrollOrResize = () => {
      if (animationFrameRef.current !== null) {
        return;
      }
      animationFrameRef.current = window.requestAnimationFrame(() => {
        animationFrameRef.current = null;
        updateRemainingTime();
      });
    };

    updateRemainingTime();
    window.addEventListener("scroll", handleScrollOrResize, {passive: true});
    window.addEventListener("resize", handleScrollOrResize);

    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [totalMinutes]);

  return <span ref={markerRef}>{remainingTimePlural(remainingTime)}</span>;
}

export default function BlogPostItemHeaderInfo({className}: Props): ReactNode {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {date, readingTime} = metadata;
  const readingTimePlural = useReadingTimePlural();

  const dateTimeFormat = useDateTimeFormat({
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  const formatDate = (blogDate: string) =>
    dateTimeFormat.format(new Date(blogDate));

  return (
    <div className={clsx(styles.container, "margin-vert--md", className)}>
      <DateTime date={date} formattedDate={formatDate(date)} />
      {typeof readingTime !== "undefined" && (
        <>
          <Spacer />
          {readingTimePlural(readingTime)}
          {isBlogPostPage && (
            <>
              <Spacer />
              <RemainingTime readingTime={readingTime} />
            </>
          )}
        </>
      )}
    </div>
  );
}
