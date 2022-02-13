import { ChatEngine } from "react-chat-engine";
import "./App.css";
import { LoginForm } from "./Components/LoginForm";

function App() {
    if (
        !localStorage.getItem("username") ||
        !localStorage.getItem("password")
    ) {
        return <LoginForm />;
    }

    return (
        <ChatEngine
            height="100vh"
            width="100vw"
            projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
            userName={localStorage.getItem("username")}
            userSecret={localStorage.getItem("password")}
        />
    );
}

export default App;
