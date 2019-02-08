import API from "../api"
import Storys from "./StoryBuilder"

const Storylist = {
    listStory() {
        API.getData("Stories")
            .then(allStories => {
                allStories.forEach(Story => {
                    const userId = sessionStorage.getItem("userId");
                    const currentUserId = JSON.parse(userId);
                    if (Story.userId === currentUserId) {
                        Storys.StoryBuilder(StoryObj);
                    }
                });
            })
    }

}

export default Storylist