export const truncateDescription=(wordCound:number,description:string)=>{
    return description.slice(0,wordCound)+(description.length < 42 ?".":"...")
}