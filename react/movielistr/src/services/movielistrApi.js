class MovieApi {
  static login(userObj) {

    const data = JSON.stringify(userObj)
    return fetch('http://localhost:3000/login', {
      method: "post",
      body: data,
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }

    })
      .then(res => res.json())
  }


  static register() {

  }

  
}

export default MovieApi
