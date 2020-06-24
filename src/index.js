document.addEventListener("DOMContentLoaded",function(){
    // call our new function in there 
    API.addHogs()
    // add the form event listener to the domContentLoaded
    document.getElementById('form').addEventListener('submit', API.addHog)
    document.getElementById('form').addEventListener('submit', API.addHog)
})