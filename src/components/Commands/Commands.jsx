import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../Contexts/Context";
import "./commands.css";

const Commands = () => {
  const { user, cmdsData } = useContext(GlobalContext);
  const [type, setType] = useState("message");
  const [cat, setCat] = useState("All");
  const [cmdname, setCmdname] = useState("");
  const [commands, setCommands] = useState([]);
  const cats = ["All", ...new Set(getType()?.map((cat) => cat))];
  function getType() {
    if (type === "message") {
      return cmdsData?.mcategories;
    } else if (type === "slash") {
      return cmdsData?.scategories;
    }
  }
  useEffect(() => {
    if (type === "message") {
      if (cmdname.length > 1) {
        let filtercmds = cmdsData?.mcommands?.filter((cmd) =>
          cmd.name.includes(cmdname)
        );
        setCommands(filtercmds);
      } else if (cat == "All") {
        setCommands(cmdsData?.mcommands);
      } else if (cat != "All" && cat.length) {
        let filtercmds = cmdsData?.mcommands?.filter((cmd) =>
          cmd.category.includes(cat)
        );
        setCommands(filtercmds);
      }
    } else if (type === "slash") {
      if (cmdname.length > 1) {
        let filtercmds = cmdsData?.scommands?.filter((cmd) =>
          cmd.name.includes(cmdname)
        );
        setCommands(filtercmds);
      } else if (cat == "All") {
        setCommands(cmdsData?.scommands);
      } else if (cat != "All" && cat.length) {
        let filtercmds = cmdsData?.scommands?.filter((cmd) =>
          cmd?.category?.includes(cat)
        );
        setCommands(filtercmds);
      }
    }
  }, [cmdname, cat, type, cmdsData]);

  return (
    <div className="commands">
      <h1 className="commands_title"> Commands </h1>
      <div className="type">
        <button onClick={() => setType("message")}>
          {" "}
          {cmdsData?.mcommands?.length} Message
        </button>
        <button onClick={() => setType("slash")}>
          {" "}
          {cmdsData?.scommands?.length} Slash
        </button>
      </div>
      {/* buttons */}
      <div>
        {cats.map((c, index) => (
          <button onClick={() => setCat(c)} key={index}>
            {c}
          </button>
        ))}
      </div>
      {/* search */}
      <input
        type="text"
        placeholder="Type Here to Find Command"
        value={cmdname}
        onChange={(e) => setCmdname(e.target.value)}
      />

      {/* commands */}
      <div className="commandspage">
        {commands?.map((cmd, index) => (
          <div className={`cmdbox`} key={index}>
            <h1 className="cmd_title"> {cmd.name} </h1>
            <p className="cmd_description"> {cmd.description} </p>
          </div>
        )) || <h1> Commands Loading... </h1>}
      </div>
    </div>
  );
};

export default Commands;
