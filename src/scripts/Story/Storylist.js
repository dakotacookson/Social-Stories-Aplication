import API from "../api"
import  Stories from "./StoryBuilder"
const Storylist = {
    listStory() {
        API.getData("Stories")
        .then(allStories => {
            allStories.forEach(Story => {
                const userId = sessionStorage.getItem("userId");
                const currentUserId = JSON.parse(userId);
                if (Story.userId === currentUserId) {
                    // Stories.StoryBuilder(Story);
                }
            });
        })
    }

}

export default Storylist