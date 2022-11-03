import { useEffect, useState } from "react";
import { mapTime } from "../mappers/mapTime";
import { getStory } from "../services/hackerNewsApi";
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement} from "../styles/StoryStyles";

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});
  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
  }, []);
  return story && story.url ? (
    <StoryWrapper data-testid="story">
      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>
      <StoryMeta>
        <span data-testid="story-by">
          <StoryMetaElement color="#000">By:</StoryMetaElement> {story.by}
        </span>
        <span data-testid="story-time">
          <StoryMetaElement color="#000">Posted:</StoryMetaElement> {` `}
          {mapTime(story.time)}
        </span>
      </StoryMeta>
    </StoryWrapper>
  ) : null;
};
