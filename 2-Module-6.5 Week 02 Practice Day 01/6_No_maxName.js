const maxName=(friends)=>{
    let bigName=friends[0]//intially
    for(let i=0;i<friends.length;i++){
        const element=friends[i];
        if(element.length>bigName.length){
            bigName=element;
        }
        
    }
    return bigName;
};

var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const maximum_name=maxName(friends);
console.log(maximum_name);