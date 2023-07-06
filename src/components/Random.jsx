import styles from'./Random.module.css'

export default function Random({min, max}){
    let rand = Math.random() * (max - min + 1) + min
    return(<div className={styles.container}>
      Random between {min}-{max} =&gt;  {Math.round(rand)}
    </div>);
}