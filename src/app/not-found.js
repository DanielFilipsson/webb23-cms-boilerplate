import { StoryblokCMS } from "@/utils/cms";

export default async function NotFound() {
     const story = await StoryblokCMS.getStory({slug: [
        "notfound"
    ]})
console.log(story);
    return (
        <div>
            {story ? (
                <div>
                    <h1>{story.content.error}</h1>
                </div>
            ) : (
                <h1>404 - Page Not Found</h1>
            )}
        </div>
    );
}



    //Fetch the 404 page from storyblok (this component works as server component aswell)
    //update this component to render a 404 page
    // return <h1>404 notfound</h1>