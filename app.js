const btn = document.querySelector(".search-btn")
const inputFeild = document.querySelector('.search')

btn.addEventListener("click",async (e) => {
    e.preventDefault();
    const res = await axios.get(` https://api.tvmaze.com/search/shows?q=${inputFeild.value}`)
    makeCard(res.data)
    inputFeild.value = "";
})

const makeCard = (shows) => {
    for (let result of shows) {
        const newImg = document.createElement('img')
        newImg.src = result.show.image.medium
        document.body.append(newImg)
        const newSpan = document.createElement('span')
        newSpan.innerText = result.show.name
        document.body.append(newSpan)
    }

}

