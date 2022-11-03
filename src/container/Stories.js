import { useEffect, useState } from "react";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { getStoryIds } from "../services/hackerNewsApi";
import { GlobalStyle, StoriesContainerWrapper } from "../styles/StoriesContainerStyles";
import { Story } from "./Story";

export const Stories = () => {
const {count, loading} = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);
  useEffect(() => {
    getStoryIds().then((ids) => ids && setStoryIds(ids));
  }, [count]);

  useEffect(() => {
    console.log("Count", count, loading);
  }, [count, loading]);
  return (
    <>
    <GlobalStyle />
    <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
      {storyIds.slice(0, count).map((id, index) => (
        <Story key={index} storyId={id} />
      ))}
      </StoriesContainerWrapper>
    </>
  );
};
