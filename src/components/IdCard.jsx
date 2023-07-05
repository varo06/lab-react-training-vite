export default function IdCard({ lastName, firstName, gender, height,picture,birth }) {
    return (
        <div style={{
            display: 'flex',
            gap: 4
        }}>
            <img src={picture} />
            <div style={{
                textAlign: 'left'
            }}>
                <div><strong>First name:</strong> {firstName}</div>
                <div><strong>Last name:</strong> {lastName}</div>
                <div><strong>Gender:</strong> {gender}</div>
                <div><strong>Height:</strong> {height + "m"}</div> {/**Importante: es una expresión JavaScript, concatenamos dos strings */}
                
                <div><strong>Birth</strong>{birth.toDateString()}</div>

            </div>


        </div>
    );
}