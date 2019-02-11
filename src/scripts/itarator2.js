import API from "./api"
const Storylist = {
    listStory() {
        API.getData("Stories")
            .then(allStories => {
                allStories.forEach(Story => {
                    const userId = sessionStorage.getItem("userId");
                    const currentUserId = JSON.parse(userId);
                    if (Story.userId === currentUserId) {
                        console.log("workes")
                    }
                });
            })
    }

}

export default Storylist