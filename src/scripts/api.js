const Deploy = "https://pip-application.herokuapp.com/"
// const local = "http://localhost:8088/"
const API = {
    getData(resource) {

        return fetch(`${Deploy}${resource}`)
            .then(response => response.json())
    },
    getData3(resource) {
        return fetch(`${Deploy}Stories/${resource}`)
            .then(response => response.json())
    },
    getData2(resource) {
        return fetch(`${Deploy}Stories?title_like=${resource}`)
            .then(response => response.json())
    },
    getPayloadData(resource, payload) {
        return fetch(`${Deploy}${resource}/${payload}`)
            .then(response => response.json())
    },
    postNewData(resource, payload) {
        return fetch(`${Deploy}${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
    },
    putExistingStory(Storyid, StoryToEdit) {
        return fetch(`${Deploy}Stories/${Storyid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(StoryToEdit)
        })
    },
    deleteData(resource) {
        return fetch(`${Deploy}Stories/${resource}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}
export default API