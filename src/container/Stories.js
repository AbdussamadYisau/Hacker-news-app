import { useEffect, useState } from "react";
import { Story } from "../components/Story";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { getStoryIds } from "../services/hackerNewsApi";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";


export const Stories = () => {
  const { count, loading } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((ids) => ids && setStoryIds(ids));
  }, [count]);

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
