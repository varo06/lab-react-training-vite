export default function Random({min, max}){
    let rand = Math.random() * (max - min + 1) + min
    return(<div>
        {rand}
    </div>);
}