import API from "../../api"
import StorysList3 from "./listbuilder"
const Storylist2 = {
    listStory2() {
        API.getData("Stories")
            .then(allStories => {
                allStories.forEach(StoryObj => {
                    const userId = sessionStorage.getItem("userId");
                    const currentUserId = JSON.parse(userId);
                    if (StoryObj.userId === currentUserId) {
                        StorysList3.StoryListBuilder5(StoryObj);
                    }
                });
            })
    }
}
export default Storylist2