const API = {

    getData(resource) {
        return fetch(`http://localhost:8088/${resource}`)
        .then(response => response.json())
    },
    getData2(resource) {
        return fetch(`http://localhost:8088/Stories?title_like=${resource}`)
        .then(response => response.json())
    },
    getPayloadData(resource, payload) {
        return fetch(`http://localhost:8088/${resource}/${payload}`)
        .then(response => response.json())
    },
    postNewData(resource,payload) {
        return fetch(`http://localhost:8088/${resource}`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        })
      },


      putExistingStory(Storyid, StoryToEdit) {
        return fetch(`http://localhost:8088/Stories/${Storyid}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(StoryToEdit)
        })
      },
    deleteData(resource) {
        return fetch(`http://localhost:8088/Stories/${resource}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
            }
        })
    }
}
export default API