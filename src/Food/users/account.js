import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "../Nav";

function Account() {
    const { id } = useParams();
    const [account, setAccount] = useState(null);
    const navigate = useNavigate();
    const fetchAccount = async () => {
        const account = await client.account();
        setAccount(account);
    };

    const save = async () => {
        await client.updateUser(account);
    };

    const signout = async () => {
        await client.signout();
        navigate("/Profile");
      };

      const findUserById = async (id) => {
        const user = await client.findUserById(id);
        setAccount(user);
      };
    
    

    useEffect(() => {
        if (id) {
            findUserById(id);
          } else {
            fetchAccount();
          }
      
      
    }, []);
    return (
        <div className="w-50">
            <div><Nav/></div>
            <h1>Account</h1>
            {account && (
                <div>
                    Username
                    <input value={account.username}
                        onChange={(e) => setAccount({
                            ...account,
                            username: e.target.value
                        })} />
                    Password
                    <input value={account.password}
                        onChange={(e) => setAccount({
                            ...account,
                            password: e.target.value
                        })} />
                    First Name
                    <input value={account.firstName}
                        onChange={(e) => setAccount({
                            ...account,
                            firstName: e.target.value
                        })} />
                Last Name
                    <input value={account.lastName}
                        onChange={(e) => setAccount({
                            ...account,
                            lastName: e.target.value
                        })} />
                    Date of Birth
                    <input value={account.dob}
                        onChange={(e) => setAccount({
                            ...account,
                            dob: e.target.value
                        })} />
                    Email
                    <input value={account.email}
                        onChange={(e) => setAccount({
                            ...account,
                            email: e.target.value
                        })} />
                    <select onChange={(e) => setAccount({
                        ...account,
                        role: e.target.value
                    })}>
                        <option value="USER">User</option>
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        <option value="STUDENT">Student</option>
                    </select>
                </div>
            )}
            <button onClick={save}>
                Save
            </button>

            <button onClick={signout}>
    Signout
  </button>

     

        </div>
    );
}
export default Account;