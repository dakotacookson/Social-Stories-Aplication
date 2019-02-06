import API from "../../api"
import  StorysList3 from "./StoryListBuilder"
const Storylist2 = {
    listStory2() {
        API.getData("Stories")
        .then(allStories => {
            allStories.forEach(Story => {
                const userId = sessionStorage.getItem("userId");
                const currentUserId = JSON.parse(userId);
                if (Story.userId === currentUserId) {
                    StorysList3.StoryListBuilder5(Story);
                }
            });
        })
    }
}
export default Storylist2