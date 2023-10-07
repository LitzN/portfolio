let menubtn = document.getElementById('menu')
let dropdown = document.getElementById('dropdown')
let icon = document.getElementById('icon')

menubtn.addEventListener('click',()=>{
    let display_list= []
    for (let i = 0; i < dropdown.classList.length; i++){
        display_list.push(dropdown.classList[i])
    }
    if (display_list.includes('d-none')){
        console.log('found')
        dropdown.classList.remove('d-none')
        icon.classList.remove('fa-bars')
        icon.classList.add('fa-caret-up')
        
    }else{
        dropdown.classList.add('d-none') 
        icon.classList.remove('fa-caret-up')
        icon.classList.add('fa-bars')
    }
    
})