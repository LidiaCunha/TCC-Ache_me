const map = require("lodash/map");

module.exports = async ( models ) => {
    
    return map(Object.keys ( models ) , model => {
        if (  ['FeaturesOfPost' ,'who_saw'].includes(model) )  return null;
        
        return models[model].destroy({where: {}, forse:true});
    }) ;

}