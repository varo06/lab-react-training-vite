import { Children } from "react";

export default function greetings({ children,lan }) {
    let greet;
    switch (lan) {
        case "de":
            greet= "Hallo"
            break;
        case "en":
            greet="Hola"
            break;
        case "es":
            greet="Hello"
            break;
        case "fr":
            greet="Bonjour"
            break;

        default:
            break;
    }
    return (<div>
        <strong>{greet} {children}</strong>
    </div>)
}