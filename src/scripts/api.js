const API = {

    getData(resource) {
        return fetch(`http://pipsocial.herokuapp.com/api/database.json${resource}`)
            .then(response => response.json())
    },
    getData3(resource) {
        return fetch(`http://pipsocial.herokuapp.com/api/database.jsonStories/${resource}`)
            .then(response => response.json())
    },
    getData2(resource) {
        return fetch(`http://pipsocial.herokuapp.com/api/database.jsonStories?title_like=${resource}`)
            .then(response => response.json())
    },
    getPayloadData(resource, payload) {
        return fetch(`http://pipsocial.herokuapp.com/api/database.json${resource}/${payload}`)
            .then(response => response.json())
    },
    postNewData(resource, payload) {
        return fetch(`http://pipsocial.herokuapp.com/api/database.json${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
    },

    // put  fetch call passing in the paramaters Story id and story to edit wich are variables im converting the object Story to edit into a reavble json string
    putExistingStory(Storyid, StoryToEdit) {
        return fetch(`http://pipsocial.herokuapp.com/api/database.jsonStories/${Storyid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(StoryToEdit)
        })
    },
    deleteData(resource) {
        return fetch(`http://pipsocial.herokuapp.com/api/database.jsonStories/${resource}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}
export default API