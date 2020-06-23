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
        <h2>${this.name}</h2>
        <img src="${this.image}" />
        <p>Specialty: ${this.specialty}</p>
        <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: ${this.weight}</p>
        <p>Highest medal achieved: ${this.highest_medal_achieved} </p>
        <p>Greased: <input data-id="${this.id} class="toggle" type="checkbox" value="greased" ${checked} ></p><br />
        <button class="delete" data-id="${this.id}>DELETE ME?</button>
      `
    }


    // delete our hogs
    // deleteHog(){
    //   console.log("you clicked delete hog!")
    // }

    // // checkbox for our greased status
    // greaseToggle(){
    //   console.log("you clicked grease toggle!")
    // }



    // render all our hogs to the page
    renderHog(){
      const hogContainer = document.getElementById('hog-container')
      const hogCard = document.createElement('div')
      hogCard.classList.add('hog-card')
      hogCard.id = this.id
      hogCard.innerHTML += this.hogHTML()
      hogContainer.appendChild(hogCard)
    }


    // link to a show page & show code
}
