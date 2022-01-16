localStorage.setItem('name', 'Bob');
localStorage.removeItem('name')

sessionStorage.setItem('name', 'John')
sessionStorage.setItem('name', 'Bob') //override
sessionStorage.removeItem('name')

document.cookie = 'name=Kyle; expires='+ new Date(2023, 0, 1).toUTCString()

console.log(document.cookie)