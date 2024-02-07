// ? ============= Atributlar, ClassName, DataSet va Style =======

let h = document.querySelector('h1')

// ? Atributlar-----atributs, setAtribute(), getAtribute(), hasAtribute(), removeAtribute()

console.log(h.getAttribute('abc'));
h.setAttribute('salom', 'dunyo')
h.setAttribute('salom', 'rejfrjhrfhrf')
let inp = document.querySelector('input')
document.querySelector('button').onclick = () => {
    if (inp.getAttribute('type') === 'password') {
        inp.setAttribute('type', 'text')
    }else{
        inp.setAttribute('type', 'password')
    }
}
console.log(h.hasAttribute('abc'));
h.removeAttribute('abc')

// ? DataSet
console.dir(h.dataset.xusan)
console.dir(h)

// ? ClassName, ClassList
console.log(h.className);
// h.className = 'dark one'
console.log(h.classList);
// add,  remove, toggle, contains
h.classList.add('abcd')
h.classList.remove('one')
console.log(h.classList.contains('abcd'));
h.onclick = () => {
    h.classList.toggle('dark')
}

// ? Style
console.log(h.style);
h.style.border = '2px solid red'
h.style.borderRadius = '60px'
h.style.padding = '15px'
h.style.cssText = `
    border: 6px solid green
`

