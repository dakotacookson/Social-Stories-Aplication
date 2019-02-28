const API = {

    getData(resource) {
        return fetch(`https://pipaplication.herokuapp.com/api/${resource}`)
            .then(response => response.json())
    },
    getData3(resource) {
        return fetch(`https://pipaplication.herokuapp.com/api/Stories/${resource}`)
            .then(response => response.json())
    },
    getData2(resource) {
        return fetch(`https://pipaplication.herokuapp.com/api/Stories?title_like=${resource}`)
            .then(response => response.json())
    },
    getPayloadData(resource, payload) {
        return fetch(`https://pipaplication.herokuapp.com/api/${resource}/${payload}`)
            .then(response => response.json())
    },
    postNewData(resource, payload) {
        return fetch(`https://pipaplication.herokuapp.com/api/${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
    },
    putExistingStory(Storyid, StoryToEdit) {
        return fetch(`https://pipaplication.herokuapp.com/api/Stories/${Storyid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(StoryToEdit)
        })
    },
    deleteData(resource) {
        return fetch(`https://pipaplication.herokuapp.com/api/Stories/${resource}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
    }
}
export default API