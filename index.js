relogio = () =>{
    function criaHoraDosSecudos(secundos)   {
        const data = new Date(secundos  * 1000)
        return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone:'UTC'})
    }
    
    const relogio = document.querySelector('.relogio')
    let segundos = 0 
    let timer;
     iniciaRelogio = () => {
         timer = setInterval( () => {
            segundos++
            relogio.innerHTML = criaHoraDosSecudos(segundos)
        }, 1000)
    }
    document.addEventListener('click', (e) => {
        const el = e.target
        
        if(el.classList.contains('zerar')){
            clearInterval(timer)
            relogio.classList.remove('pausado')
            relogio.innerHTML ='00:00:00'
            segundos = 0
        }
        if(el.classList.contains('pausar')){
            clearInterval(timer)
            relogio.classList.add('pausado')
        }
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado')
            clearInterval(timer)
            iniciaRelogio()
        }
    })
    
}
relogio()
