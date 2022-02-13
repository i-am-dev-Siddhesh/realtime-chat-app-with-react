import { useState } from "react";
import axios from "axios";

export const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const authObject = {
                "Project-ID": process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID,
                "User-Name": username,
                "User-Secret": password,
            };
            await axios.get("https://api.chatengine.io/chats", {
                headers: authObject,
            });

            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            window.location.reload();
        } catch (err) {
            localStorage.setItem("username", "");
            localStorage.setItem("password", "");
        }
    };
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        className="input"
                        placeholder="Username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        required
                    ></input>
                    <input
                        type="password"
                        value={password}
                        placeholder="Password"
                        className="input"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                    ></input>
                    <div align="center">
                        <button type="submit" className="button">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


