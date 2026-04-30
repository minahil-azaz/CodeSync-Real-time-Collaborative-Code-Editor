import "./App.css";
import Editor from "@monaco-editor/react";
import { MonacoBinding } from "y-monaco";
import { useRef, useMemo, useState, useEffect } from "react";
import * as Y from "yjs";
import { SocketIOProvider } from "y-socket.io";

function App() {
  const editorRef = useRef(null);
  const providerRef = useRef(null);
  const bindingRef = useRef(null);

  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState(() => {
    return new URLSearchParams(window.location.search).get("username") || "";
  });

  // YJS Document
  const ydoc = useMemo(() => new Y.Doc(), []);
  const yText = useMemo(() => ydoc.getText("monaco"), [ydoc]);

  const handleMount = (editor) => {
    editorRef.current = editor;

    if (providerRef.current) {
      bindingRef.current = new MonacoBinding(
        yText,
        editor.getModel(),
        new Set([editor]),
        providerRef.current.awareness
      );
    }
  };

  useEffect(() => {
    if (!username) return;

    const provider = new SocketIOProvider(
      "/",
      "monaco",
      ydoc,
      {
        autoConnect: true,
      }
    );

    providerRef.current = provider;

    provider.awareness.setLocalStateField("user", { username });

    const updateUsers = () => {
      const states = Array.from(provider.awareness.getStates().values());

      setUsers(
        states
          .map((state) => state.user)
          .filter((user) => user?.username)
      );
    };

    updateUsers();

    provider.awareness.on("change", updateUsers);

    const handleBeforeUnload = () => {
      provider.awareness.setLocalStateField("user", null);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    // If editor already mounted
    if (editorRef.current) {
      bindingRef.current = new MonacoBinding(
        yText,
        editorRef.current.getModel(),
        new Set([editorRef.current]),
        provider.awareness
      );
    }

    return () => {
      bindingRef.current?.destroy();
      provider.disconnect();
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [username, ydoc, yText]);

  const handleJoin = (e) => {
    e.preventDefault();

    const value = e.target.username.value.trim();

    if (!value) return;

    setUsername(value);
    window.history.pushState({}, "", "?username=" + value);
  };

  if (!username) {
    return (
      <main className="h-screen w-full bg-gray-950 flex items-center justify-center p-4">
        <form onSubmit={handleJoin} className="flex flex-col gap-4">
          <input
            type="text"
            name="username"
            placeholder="Enter your name"
            className="p-2 rounded-lg text-white bg-gray-800"
          />

          <button className="p-2 rounded-lg bg-amber-50 text-gray-950 font-bold">
            Join
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="h-screen w-full bg-gray-950 flex gap-4 p-4">
      <aside className="h-full w-1/4 bg-amber-50 rounded-lg p-4 overflow-auto">
        <h2 className="font-bold mb-3">Users</h2>

        <ul className="space-y-2">
          {users.map((user, index) => (
            <li
              key={index}
              className="p-2 bg-gray-800 text-white rounded"
            >
              {user.username}
            </li>
          ))}
        </ul>
      </aside>

      <section className="w-3/4 bg-neutral-800 rounded-lg overflow-hidden">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue="// some comment"
          theme="vs-dark"
          onMount={handleMount}
        />
      </section>
    </main>
  );
}

export default App;