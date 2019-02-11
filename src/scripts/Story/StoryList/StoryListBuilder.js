import Stories from "../StoryBuilder"
const StorysList3 = {
    StoryListBuilder5(StoryObj) {
        const StoryArticle = document.querySelector(".Story2")
        const StoryName2 = document.createElement("h2");
        StoryName2.setAttribute("id", `Title--${StoryObj.id}`)
        StoryName2.setAttribute("Class", "Title0")
        const StoryOutputSection = document.createElement("article");
        StoryOutputSection.appendChild(StoryName2);
        StoryArticle.appendChild(StoryOutputSection);
        StoryName2.textContent = StoryObj.title;
        StoryName2.addEventListener("click", () => {
            let Storiescontainer = document.querySelector(".stories")
            Storiescontainer.innerHTML = " "
            let clearcontewnt = document.querySelector(".Story")
            clearcontewnt.innerHTML = " "
            Stories.StoryBuilder(StoryObj);

        })
    }
}

export default StorysList3