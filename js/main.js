fetch("https://golf-courses-api.herokuapp.com/courses", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
         console.error(err)
       })

fetch("https://golf-courses-api.herokuapp.com/courses", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => {
         console.error(err)
       })