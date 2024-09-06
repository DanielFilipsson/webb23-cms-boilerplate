"use client";
import { StoryblokCMS } from "@/utils/cms";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import Page from "@/components/content-types/Page";

import Teaser from "@/components/nestable/Teaser";
import RichTextDefault from "@/components/nestable/RichText";
import Hero from "@/components/content-types/Hero";
import ImageWithText from "@/components/nestable/ImageWithText";
import Grid from "@/components/content-types/Grid";

const components = {
  "page": Page,
  "teaser":Teaser,
  "richtext": RichTextDefault,
  "hero": Hero,
  "image_with_text": ImageWithText,
  "grid": Grid
}

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,

  use: [apiPlugin],
  components
});

export default function StoryblokProvider({ children }) {
  return (
    children
  );
}