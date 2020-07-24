
/**Data page  
 * contains an array with five objects and four attributes*/


const guitars = [

    {brand : 'Fender', model : 'Stratocaster', color : 'sunburst', year : 1965 },
    {brand : 'Fender', model : 'Jaguar', color : 'Navy Blue Metallic', year : 1976 },
    {brand : 'Fender', model : 'Telecaster', color : 'Vintage Natural', year : 1972 },
    {brand : 'Gibson', model : 'Les Paul Custom', color : 'Cherry Sunburst', year : 2009 },
    {brand : 'PRS Guitars', model : 'PRS Custom 22', color : 'Surf Green', year : 2013 },

];

/** creates a function that returns the contents of the Array guitars*/

exports.getAll = ()=> {
    return guitars;
}


exports.getGuitar = (guitarSearch) => {
    let foundGuitar = guitars.find(guitar => guitar.model === guitarSearch)
    return foundGuitar;
}


exports.addGuitar = (newGuitar) => {

    let result = this.getGuitar(newGuitar.model);
    if (result){
        return {"added": false, "message": "item already exists"}
    }

        guitars.push(newGuitar);
        return {"added": true};
}


exports.delGuitar = (model) => {
        let gtrPostion = guitars.findIndex(guitars => guitars.model === model);
        
        if(gtrPostion > -1) {
            guitars.splice(gtrPostion, 1);
            return {"deleted": true};
        }

        return {"deleted": false, "message": "item not in the array"}
      
}