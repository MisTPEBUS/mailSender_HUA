const fetchAndStoreData = async (req,next)=>{

    try{
        console.log('OK');
        next();
    }
    catch(error){
        console.log(error);
        next(error);
    }

}
module.exports = {fetchAndStoreData};