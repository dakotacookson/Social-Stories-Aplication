import API from "../api"
import StoryEditForm from "./StoryEditForm"
import StoryForm from "./StoryForm"
const Storys = {
    //StoryObj  is pased in far down the line but it comes directly from a for each loop
    StoryBuilder(StoryObj) {
        //Creates an element
        const StoryArticle = document.querySelector(".Story")
        //Creates an element
        const StoryName = document.createElement("h2");
        //Creates an element
        const StoryPicture = document.createElement("img");
        //Creates an element
        const StoryPicture2 = document.createElement("img");
        //Creates an element
        const StoryPicture3 = document.createElement("img");
        //sets  1 of 3var to the pic url in database
        const VAR = StoryObj.picture;
        //sets  1 of 3var to the pic url in database
        const VAR2 = StoryObj.picture2;
        //sets  1 of 3var to the pic url in database
        const VAR3 = StoryObj.picture3;
        //sets source to var  1
        StoryPicture.setAttribute("src", `${VAR}`)
        //sets source to var  2
        StoryPicture2.setAttribute("src", `${VAR2}`)
        //sets source to var  3
        StoryPicture3.setAttribute("src", `${VAR3}`)
        //Creates an element
        const Story = document.createElement("p");
        //sets class
        Story.setAttribute("class", "paragraph")
        //Creates an element
        const StoryOutputSection = document.createElement("article");
        //sets id to the object id in the database
        StoryOutputSection.setAttribute("Id", `${StoryObj.id}`)
        //sets class
        StoryOutputSection.setAttribute("Class", "Arti1")
        //appends the fragment to the greater pieice
        StoryArticle.appendChild(StoryOutputSection);
        //appends the  the even smaller fragmentns to the fragment
        StoryOutputSection.appendChild(StoryName);
        //appends the  the even smaller fragmentns to the fragment
        StoryOutputSection.appendChild(StoryPicture);
        //appends the  the even smaller fragmentns to the fragment
        StoryOutputSection.appendChild(StoryPicture2);
        //appends the  the even smaller fragmentns to the fragment
        StoryOutputSection.appendChild(StoryPicture3);
        //appends the  the even smaller fragmentns to the fragment
        StoryOutputSection.appendChild(Story);
        //sets  the text to a piece in the database
        StoryName.textContent = StoryObj.title;
        //sets  the text to a piece in the database
        StoryPicture.textContent = StoryObj.picture;
        //sets  the text to a piece in the database
        StoryPicture2.textContent = StoryObj.picture2;
        //sets  the text to a piece in the database
        StoryPicture3.textContent = StoryObj.picture3;
        //sets  the text to a piece in the database
        Story.textContent = StoryObj.Text;
        //Creates an element
        const Back = document.createElement("button")
        //sets class
        Back.setAttribute("Class", "BackButton")
        //sets  the text
        Back.textContent = "Back"
        //sets click event on back button when clicked
        Back.addEventListener("click", () => {
            // add the style of NONE to the queery and
            document.querySelector(".Arti1").style.display = "none";
            //  run the functiion
            StoryForm.StoryFormBuilder()
        })
        //adds back button to fragment
        StoryOutputSection.appendChild(Back);

         //Creates an element
        const StoryEditButton = document.createElement("button");
        //adds Edit button to fragment
        StoryOutputSection.appendChild(StoryEditButton);
        //sets text
        StoryEditButton.textContent = "Edit";
        //sets class
        StoryEditButton.setAttribute("Class", "EditButton")
        // creates a click event on edit button when clicked
        StoryEditButton.addEventListener("click", () => {
            // wipe the inner html of the button ellement
            StoryEditButton.innerHTML = " "
            //set the style display of the button ellement to none
            StoryEditButton.style.display = "none";
            //used to grabe specific ids
            let articleId = event.target.parentNode.id;
            //runs story form function and passes to paramaters
            StoryEditForm.createAndAppendForm(StoryObj, articleId)
        })
        const StoryDeleteButton = document.createElement("button");
        StoryOutputSection.appendChild(StoryDeleteButton);
        StoryDeleteButton.textContent = "Delete";
        StoryDeleteButton.setAttribute("Class", "DeleteButton")
        StoryDeleteButton.addEventListener("click", () => {
            let StoryId2 = StoryObj.id
            API.deleteData(StoryId2)
                .then(response => {
                    const restart = document.querySelector(".Arti1")
                    let titledelete = document.querySelector(`#Title--${StoryObj.id}`)
                    titledelete.innerHTML = " "
                    titledelete.style.display = "none"
                    restart.innerHTML = " "
                    document.querySelector(".Arti1").style.display = "none";
                    document.querySelector(".Story").innerHTML = " "
                    StoryForm.StoryFormBuilder(StoryObj)
                    console.log(response)
                })
        })
        if (VAR == "") {
            StoryPicture.style.display = "none"
        }
        if (VAR2 == "") {
            StoryPicture2.style.display = "none"
        }
        if (VAR3 == "") {
            StoryPicture3.style.display = "none"
        }
    }
}
export default Storys