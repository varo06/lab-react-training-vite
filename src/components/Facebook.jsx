import profiles from '../data/berlin.json';

function Profile({ firstName, lastName, country, img, isStudent }) {
    let type = isStudent  ? "Student" : "Teacher"
    return (
        <div style={{
            display: 'flex',
            gap: 4
        }}>
            <img src={img} style={{
                width : 'flex'
            }}></img>
            <div style={{
                textAlign: 'left'
            }}>

                <div><strong>First Name</strong> :  {firstName} </div>
                <div><strong>Last Name</strong> :  {lastName} </div>
                <div><strong>Country</strong> :  {country} </div>
                <div><strong>Type</strong> :  {type} </div>
            </div>
        </div>
    )
}

export default function FaceBook() {
    return (
        <div>
            {profiles.map(profile => <Profile {...profile}></Profile>)}
        </div>
    )
}