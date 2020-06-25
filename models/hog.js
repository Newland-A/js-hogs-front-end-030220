class Hog {
    constructor(id, name, specialty, greased, weight,highest_medal_achieved, image){
      this.id = id
      this.name = name
      this.specialty = specialty
      this.greased = greased
      this.weight = weight
      this.highest_medal_achieved = highest_medal_achieved
      this.image = image
      this.renderHog()
    }


    hogHTML(){
      let checked = this.greased == true ? "checked" : ""
      return `
        <a href="/hogs/${this.id}"><h2 class="header">${this.name}</h2></a>
        <img src="${this.image}" width="100" />
        <p>Specialty: ${this.specialty}</p>
        <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: ${this.weight}</p>
        <p>Highest medal achieved: ${this.highest_medal_achieved} </p>
        <p>Greased: <input data-id="${this.id}" class="toggle" type="checkbox" value="greased" ${checked} ></p>
        <button class="delete">DELETE ME???</button>
      `
    }


    // delete our hogs
    deleteHog(e){
      const id = parseInt(e.target.parentElement.id)
      fetch(`http://localhost:3000/hogs/${id}`,{
        method: 'DELETE'
      })
      .then(() => {
        document.getElementById('hog-container').removeChild(document.getElementById(id))
      })
    }

    // checkbox for our greased status
    greaseToggle(e){
      const id = parseInt(e.target.parentElement.parentElement.id)
      fetch(`http://localhost:3000/hogs/${id}`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          greased: e.target.checked
        })
    })
  }



    // render all our hogs to the page
    renderHog(){
      const hogContainer = document.getElementById('hog-container')
      const hogCard = document.createElement('div')
      hogCard.classList.add('hog-card')
      hogCard.id = this.id
      hogCard.innerHTML += this.hogHTML()
      hogContainer.appendChild(hogCard)
      hogCard.addEventListener('click', e => {
        if (e.target.className === 'toggle') this.greaseToggle(e)
        if (e.target.className.includes('delete')) this.deleteHog(e)
        if (e.target.className.includes('header')) this.showHog(e)
      })
    }


    // add event listener
    // static showHogs(){
    //   debugger
    //   let headers = Array.from(document.getElementsByClassName('header'))
    //   debugger
    //   headers.forEach(head => {
    //     debugger
    //     head.addEventListener('click', Hog.showHog)
    //   })
    // }

    showHog(e){
      debugger
    }
}

// 