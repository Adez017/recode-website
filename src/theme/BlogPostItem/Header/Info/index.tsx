import React, {type ReactNode, useEffect, useMemo, useState} from "react";
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

function RemainingTime({readingTime}: {readingTime: number}) {
  const totalMinutes = useMemo(() => Math.max(1, Math.ceil(readingTime)), [readingTime]);
  const [remainingTime, setRemainingTime] = useState(totalMinutes);
  const remainingTimePlural = useRemainingTimePlural();

  useEffect(() => {
    const updateRemainingTime = () => {
      const article = document.querySelector("main article");
      if (!article) {
        setRemainingTime(totalMinutes);
        return;
      }

      const articleRect = article.getBoundingClientRect();
      if (articleRect.height <= 0) {
        setRemainingTime(totalMinutes);
        return;
      }

      const articleTop = window.scrollY + articleRect.top;
      const viewportBottom = window.scrollY + window.innerHeight;
      const pixelsRead = Math.min(
        articleRect.height,
        Math.max(0, viewportBottom - articleTop),
      );
      const progress = pixelsRead / articleRect.height;
      const computedRemaining = Math.ceil(totalMinutes * (1 - progress));
      setRemainingTime(Math.max(0, computedRemaining));
    };

    updateRemainingTime();
    window.addEventListener("scroll", updateRemainingTime, {passive: true});
    window.addEventListener("resize", updateRemainingTime);

    return () => {
      window.removeEventListener("scroll", updateRemainingTime);
      window.removeEventListener("resize", updateRemainingTime);
    };
  }, [totalMinutes]);

  return <>{remainingTimePlural(remainingTime)}</>;
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
