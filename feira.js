const regioes = {
    roxao: document.getElementById('roxao'),
    verdao: document.getElementById('verdao'),
    vermeiao: document.getElementById('vermeiao'),
    azulao: document.getElementById('azulao')
}
const rcentral = document.getElementById('regiao-central')

document.addEventListener('mousemove', onmousemove, false)
rcentral.addEventListener('mouseleave', expand)
document.addEventListener('mousedown', (e) => {
    document.querySelectorAll('.full').forEach(elem => {
        elem.classList.remove('full');
    })
    document.addEventListener('mousemove', onmousemove, false)
    document.body.style.cursor = 'none'
    onmousemove(e);
})

function onmousemove(e){
    x = e.clientX
    y = e.clientY

    regioes.roxao.style.height = y + 'px'
    regioes.roxao.style.width = x + 'px'
    
    regioes.verdao.style.height = y + 'px'
    regioes.verdao.style.width = `calc(100vw - ${x}px)`
    
    regioes.vermeiao.style.height = `calc(100vh - ${y}px)`
    regioes.vermeiao.style.width = x + 'px'
    
    regioes.azulao.style.height = `calc(100vh - ${y}px)`
    regioes.azulao.style.width = `calc(100vw - ${x}px)`
}

function expand(e){
    const areas = {
        roxao: regioes.roxao.clientWidth * regioes.roxao.clientHeight,
        verdao: regioes.verdao.clientWidth * regioes.verdao.clientHeight,
        vermeiao: regioes.vermeiao.clientWidth * regioes.vermeiao.clientHeight,
        azulao: regioes.azulao.clientWidth * regioes.azulao.clientHeight
    };

    let maxArea = 0
    let maxColor = ''

    for (const color in areas) {
        if (areas[color] > maxArea) {
            maxArea = areas[color]
            maxColor = color
        }
    }
    
    document.removeEventListener('mousemove', onmousemove)

    regioes[maxColor].style.width = '100vw'
    regioes[maxColor].style.height = '100vh'
    regioes[maxColor].classList.add('full');

    document.body.style.cursor = 'default'
}