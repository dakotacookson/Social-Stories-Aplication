import API from "../api"
import StoryList from "./Storylist"
import StoryEditForm from "./StoryEditForm"
const Storys = {
    StoryBuilder(StoryObj) {
        const StoryArticle = document.querySelector(".Story")
        const StoryName = document.createElement("h2");
        const StoryPicture = document.createElement("img");
        const VAR = StoryObj.picture;
        StoryPicture.setAttribute(`src`, `${VAR}`)
        const Story = document.createElement("p");
        const StoryOutputSection = document.createElement("article");
        StoryOutputSection.setAttribute("Id", `${StoryObj.id}`)
        StoryOutputSection.setAttribute("Class", `Arti1`)
        StoryArticle.appendChild(StoryOutputSection);

        StoryOutputSection.appendChild(StoryName);
        StoryOutputSection.appendChild(StoryPicture);
        StoryOutputSection.appendChild(Story);

        StoryName.textContent = StoryObj.title;
        StoryPicture.textContent = StoryObj.picture;
        Story.textContent = StoryObj.Text;
        const Back = document.createElement("button")
        Back.setAttribute("Class", "BackButton")
        Back.textContent = "Back"
        Back.addEventListener("click", () => {
            window.location.reload()
        })
        StoryOutputSection.appendChild(Back);


        const StoryEditButton = document.createElement("button");
        StoryOutputSection.appendChild(StoryEditButton);
        StoryEditButton.textContent = "Edit";
        StoryEditButton.setAttribute("Class", "EditButton")
        StoryEditButton.addEventListener("click", () => {
            let articleId = event.target.parentNode.id;
            let StoryId = StoryObj.id
            API.getData(StoryId)
                .then(response => {
                    StoryEditForm.createAndAppendForm(StoryObj, articleId)
                })
        })
        const StoryDeleteButton = document.createElement("button");
        StoryOutputSection.appendChild(StoryDeleteButton);
        StoryDeleteButton.textContent = "Delete";
        StoryDeleteButton.setAttribute("Class", "DeleteButton")
        StoryDeleteButton.addEventListener("click", () => {
            let StoryId2 = StoryObj.id
            API.deleteData(StoryId2)
                .then(response => {
                    StoryList.listStory();
                    window.location.reload()
                })
        })
    }
}


export default Storys