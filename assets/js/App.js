const ho = document.querySelector(".ly")
const src = document.querySelector("#src")
const bg_big = document.querySelector(".bg_big")
const bg_sml = document.querySelector(".bg_sml")
ho.addEventListener('mouseover', () => {
    src.style.animation = 'rotate 2s infinite'

})
ho.addEventListener('mouseout', () => {
    src.style.animation = 'none'
})
const Body_img = document.querySelector(".shfl")
const Body_img_full = document.querySelector(".Head_B_img")

addEventListener('scroll', (e) => {
    const scrollPosation = window.scrollY
    if(scrollPosation > 380){
        bg_big.style.opacity = '1'
        bg_sml.style.opacity = '0'
    }
    else{
        bg_big.style.opacity = '0'
        bg_sml.style.opacity = '1'
    }


})




