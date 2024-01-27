
/*      HERANÇA EM JS   
    
    - Um Obj em JS, por padrão, tem uma referencia para seu prototipo
    - que é Object.prototype
    - acessado a partir do __proto__
    - assim que JS lida com herança
    
*/

const ferrari = {
    modelo: 'f40',
    velmax: 324
}

const volvo = {
    modelo: 'v40',
    velMax: 200
}

/*   __proto__  -> a partir dele posso acessar o prototipo desse obj (obj pai)  */
    console.log(ferrari.__proto__);

    console.log(ferrari.__proto__ === Object.prototype); //true

    console.log(volvo.__proto__ === Object.prototype);

    console.log(ferrari.__proto__ === volvo.__proto__);

    console.log(Object.prototype.__proto__); //null, é o 'pai' maximo