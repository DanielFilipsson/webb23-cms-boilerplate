import { StoryblokComponent } from "@storyblok/react/rsc";

const Main = ({ blok }) => {
  return (
    <div>
      {}
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Main;