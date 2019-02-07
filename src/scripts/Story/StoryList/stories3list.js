import API from "../../api"
import StorysList5 from "./StoryListBuilder"
const Storylist4 = {
    listStory4() {
        let searchbutton3 = document.getElementById("Searchbar").value
        API.getData2(searchbutton3)
            .then(allStories => {
                allStories.forEach(Story => {
                    const userId = sessionStorage.getItem("userId");
                    const currentUserId = JSON.parse(userId);
                    if (Story.userId === currentUserId) {
                        StorysList5.StoryListBuilder5(Story);
                    }
                });
            })
    }
}
export default Storylist4