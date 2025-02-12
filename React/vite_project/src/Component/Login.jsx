import DB from "./DBChecking"
export default function Login()
{
    const Uname="Pavithra"
    const Pwd="Pavi@123"
    return(<div>
        <DB Uname={Uname} Pwd={Pwd}/>
        </div>);
}