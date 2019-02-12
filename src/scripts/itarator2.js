import API from "./api"
const Storylist = {
    //itaratres over the objects in the database specificly the stories
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