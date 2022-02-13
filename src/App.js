import "./App.css";
import { ChatEngine } from "react-chat-engine";

function App() {
    return (
        <ChatEngine
            height="100vh"
            width="100vw"
            projectID={process.env.REACT_APP_CHAT_ENGINE_PROJECT_ID}
            userName="siddhesh"
            userSecret="password"
        />
    );
}

export default App;
