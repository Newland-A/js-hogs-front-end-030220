class API {
  // move our initial fetch into a function here 

  static addHogs(){
    fetch("http://localhost:3000/hogs")
      .then(resp => resp.json())
      .then(hogs => {
        hogs.forEach(hog => {
            const { id, name, specialty, greased, weight,highest_medal_achieved, image } = hog
            new Hog(id, name, specialty, greased, weight,highest_medal_achieved, image)
        })
    }) 
  }

  // move our form here
  static addHog(e){
    e.preventDefault()
    // capture our form data
    let data = {
        'name': e.target.name.value,
        'specialty': e.target.specialty.value,
        'greased': e.target.greased.checked,
        'weight': e.target.weight.value,
        'highest_medal_achieved': e.target.medal.value,
        'image': e.target.img.value,
        'piglets_attributes': {
          'name': e.target.piglet.value,
          'color': e.target.color.value,
          'sex': e.target.sex.value,
          'cuteness_factor': e.target.cuteness.value
        } 
    };
    // write our fetch and send it to our back end
    fetch('http://localhost:3000/hogs', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    // grab our fetch response
    .then(resp => resp.json())
    .then(hog => {
        const { id, name, specialty, greased, weight,highest_medal_achieved, image } = hog
        new Hog(id, name, specialty, greased, weight,highest_medal_achieved, image)
        document.getElementById('hog-form').reset()
    })
    // create a new Hog object
    // clear our form
  }
  // make sure all the functions still work

  
}