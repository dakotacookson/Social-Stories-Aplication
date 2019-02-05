const StorysList3 = {
    StoryListBuilder(StoryObj) {
        const StoryArticle = document.querySelector(".Story2")
        const StoryName2 = document.createElement("h1");
        StoryName2.setAttribute("Class" , `${StoryObj.id}`)
        const StoryOutputSection = document.createElement("article");
        StoryOutputSection.appendChild(StoryName2);
        StoryArticle.appendChild(StoryOutputSection);
        StoryName2.textContent = StoryObj.title;
    }
}

export default StorysList3