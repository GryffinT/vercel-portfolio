let input = document.getElementById("receiver"),
    display = document.getElementById("output"),
    report = document.getElementById("report"),
    prompt = document.getElementById("prompt"),
    appDisplay = document.getElementById("appContainer"),
    background = document.getElementById("backDisplay");

let projects = {
  "aiproject-launcher": 
    "<br>" + 
    "===============<br>" +
    "<span style='font-weight: bold;'>AI Project</span><br>" +
    "status: <span style='color: red'>closed</span><br>" +
    "<a href='https://github.com/GryffinT/AI-project'>Repo</a><br>" +
    "<a href='https://ai-project-h4ytpdxvxrscksmgmuwyzu.streamlit.app/'>Demo</a><br>" +
    "----------<br>" +
    "I made this project for fun. I'm really interested in AI and how it works so I figured that I'd get my hands a little dirty. It's nothing too serious but I had a lot of fun learning about some of the simpler facets of AI development, the huggingFace library, and similarity metrics. The training and optimization process was particularly interesting. Tuning the hyperparameters and adjusting the training data was really cool to see.<br>" +
    "----------<br>" +
    "Tools & Languages<br>" + 
    "----------" +
    "<ul><li>Python</li><li>Torch</li><li>HuggingFace</li><li>SciKit-learn</li><li>spaCy</li></ul><br>" +
    "==========",

  "sharpecalc-launcher": 
    "<br>" + 
    "===============<br>" +
    "<span style='font-weight: bold;'>Sharpe Calculator</span><br>" +
    "status: <span style='color: lime'>open</span><br>" +
    "<a href='https://github.com/GryffinT/sharpeCalc'>Repo</a><br>" +
    "----------<br>" +
    "I'm really interested in fintech, economics, and computer science so I figured I'd finally commit to a project which incorporates all of them together. This is my first independent project to use C++ so I'm decently proud of what I've been able to do. I'm also really happy with the GUI I've made to accompany it.<br>" +
    "----------<br>" +
    "Tools & Languages<br>" + 
    "----------" +
    "<ul><li>HTML & CSS</li><li>Javascript</li><li>C++</li><li>StockData API</li><li>Electron</li></ul><br>" +
    "==========", 

  "roboticswebsite-launcher": 
    "<br>" + 
    "===============<br>" +
    "<span style='font-weight: bold;'>Robotics Website</span><br>" +
    "status: <span style='color: lime'>open</span><br>" +
    "<a href='https://github.com/GryffinT/CE-Website'>Repo</a><br>" +
    "<a href='https://ce-website-neon.vercel.app/'>Demo</a><br>" +
    "----------<br>" +
    "This is the official website for the Edgewood robotics team. It was made as a club activity. It was a lot of fun slowly improving my code. When I had started I was first learning HTML and barely knew any javascript. However, since them I've become somewhat more comforable with both and have created sometime I feel proud of.<br>" +
    "----------<br>" +
    "Tools & Languages<br>" + 
    "----------" +
    "<ul><li>HTML & CSS</li><li>Javascript</li><li>Vercel</li></ul><br>" +
    "==========", 
};


let directories = {
  projects: {
    name: "projects",
    contents: ["AiProject-launcher", "sharpeCalc-launcher", "roboticsWebsite-launcher"]
  }
};

let command,
    prefix = "<span style='color: olive'>gryffint@portfolio:~</span>",
    workingDir = directories;
    dirs = "";

prompt.innerHTML = "<span style='color: olive'>gryffint@portfolio:~</span>$";

let printBack = (message) => {
  let textItem = document.createElement("p");
  textItem.innerHTML = `<span style="color: red">Systemc@Portfolio~/$</span> ${message}`;
  backDisplay.appendChild(textItem);
  backDisplay.scrollTo({
    top: backDisplay.scrollHeight,
    behavior: 'smooth'
  });
}

let print = (message) => {
  printBack(`printing ${message}`);
  printBack("creating 'p' element");
  let textItem = document.createElement("p");
  printBack("'p' element created");
  printBack("setting textItem.innerHTML to " + prefix + "$" + message);
  textItem.innerHTML = `${prefix}$ ${message}`;
  printBack("innerHTML set");
  printBack("appending textitem to 'display'");
  display.appendChild(textItem);
  printBack("printing finished");
}

let printFormat = (num, message) => {
  printBack(`printing ${message} with whitespace`);
  print(" ")
  printBack(`looping ${num} times to create whitespace`);
  for (let i = 0; i < num - 1; i++) {
    printBack(`creating textItem as type 'p'`);

    let textItem = document.createElement("p");
    printBack(`setting textItem.innerHTML to &nbsp`);

    textItem.innerHTML = "&nbsp";
    printBack(`appending textItem to display`);

    display.appendChild(textItem);
    printBack(`loop ${i} concluding proceeding`);

  }
  printBack(`loop completed`);
  
  printBack(`creating textItem as type 'p'`);
  let textItem = document.createElement("p");
  printBack(`setting textItem.innerHTML to ${message}`);

  textItem.innerHTML = message;
  printBack(`appending textItem to display`);

  display.appendChild(textItem);
  printBack(`printFormat concluding`);

}

let help = () => {

  let keys = Object.keys(commands);
  printBack(`creating array of Object.keys(commands)`);

  printBack(`resetting helpMessage`);
  let helpMessage = "";

  printBack(`iterating over keys array`);
  for ( let i = 0; i < Object.keys(commands).length; i++ ) {
    printBack(`fetching current index`);
    let key = keys[i];

    printBack(`concatinating key.padEnd(20) + commands[key].description + '<br>' with helpMessage`);
    helpMessage += key.padEnd(20) + commands[key].description + "<br>";

    printBack(`iteration ${i} concluded`);
  }
  
  printFormat(1, "This may look somewhat like a terminal but it isnt one, dont expect too much! To find my projects you can <span style='font-weight: bold;'>cd</span> into the projects directory and <span style='font-weight:bold'>open</span> any of the listed projects there. No need to worry about case sensitivity either!<br><br>" + helpMessage);

}

let clear = () => {
  printBack(`replacing all children in display`);
  display.replaceChildren();
}

let dir = () => {
  printBack(`resetting dirs to ""`);
  dirs = "";
  printBack(`initiating try block`);
  try {
    printBack(`${workingDir} == directories -> true`);
    if (workingDir == directories) {
      printBack(`iterating over Object.keys(${workingDir})`);
      for ( let item of Object.keys(workingDir) ) {
        printBack(`concatinating directories[item].name + "    " with dirs`);
        dirs += directories[item].name + "    "; 
      }
      printBack(`proceeding`);
    } else {
      printBack(`${workingDir} == directories -> false`);
      printBack(`setting dirs to directories[workingDir].contents`);
      dirs = (directories[workingDir].contents);
      printBack(`parsing dirs with dirs.join(",").replaceAll(",", "&nbsp;&nbsp;&nbsp;&nbsp")`);
      dirs = (dirs).join(",").replaceAll(",", "&nbsp;&nbsp;&nbsp;&nbsp;" );
    }
    printFormat(1, dirs);
  } catch (error) {
    printBack(`error caught: ${error}`);
    console.log(error);
  }
}

let cd = ( directory ) => {
  printBack(`executing cd(${directory})`);
 
  if ( !directory ) {
  
    printBack(`directory -> false`);
    printBack(`setting prefix to <span style='color: olive'>gryffint@portfolio:~</span>`);
    
    prefix = "<span style='color: olive'>gryffint@portfolio:~</span>";
    
    printBack(`resetting workingDir to directories`);
    
    workingDir = directories;
  
  } else if ( Object.keys(directories).includes(directory) && !prefix.includes(directory)) {
  
    printBack(`Object.keys(directories.includes(directory) && !prefix.includes(directory)) -> true`);
    printBack(`setting workingDir to directories[directory].name`);
    
    workingDir = directories[directory].name;
    
    if ( prefix.includes(directory) ) {
    
      printBack(`prefix.includes(directory) -> true`);
      printBack(`setting prefix to prefix.substring(0, prefix.indexOf(directory) - 1`);
      
      prefix = prefix.substring(0, prefix.indexOf(directory) - 1);
    
    } else {
    
      printBack(`prefix.includes(directories) -> false`);
      printBack(`setting prefix to <span style="color: olive;">/${directory}</span>`);
      
      prefix += `<span style="color: olive;">/${directory}</span>`;
    }
  
  } else {
  
    printBack(`cd false`);
    print(`portfolio: cd: ${directory}: No such file or directory`)
  }
}

let open = (file) => {
  printBack(`trying open(${file})`);
  try {
    printBack(`file set to file.trim().toLowerCase()`);
    file = file.trim().toLowerCase();
    
    printBack(`normalizedContents = directories[${workingDir}].contents.map(item => item.toLowerCase().trim()`);
    let normalizedContents = directories[workingDir].contents.map(item =>
      item.toLowerCase().trim()
    );

    if (normalizedContents.includes(file)) {
      /*
        printBack(`normalizedContents.includes(${file}) -> true`);
        printBack(`appContainer.style.display = "flex"`);
        appContainer.style.display = "flex";
        printBack(`receipts.style.display = "none"`);
        receipts.style.display = "none";
        printBack(`document.getElementById("input-line").style/display = "none"`);
        document.getElementById("input-line").style.display = "none";
        printBack(`document.getElementById.style.display.gridTemplateRows = "40px auto"`);
        document.getElementById("commandLine").style.gridTemplateRows = "40px auto";
      */
      print(projects[file])
    } else {
      print(`open: ${file}: no such file exists`);
    }
  } catch (error) {
    printBack(`error caught: ${error}`);
    print(`open: ${file}: no such file exists`);
  };
};

let whoami = () => { 
  printFormat(2, 
  "Name: Gryffin<br>" +
  "Github: <a href='https://github.com/GryffinT'>link</a><br>" +
  "==============================<br><br>" +
  "I love programming, data science, AI, and economics.<br><br>" +
  "-----<br>" +
  "Tools & Languages<br>" +
  "-----" +
  "<ul> <li>Python</li> <li>Javascript</li> <li>HTML & CSS</li> <li>Java</li> <li>C++</li> <li>Electron</li> <li>Vercel</li> <li>Streamlit</li> </ul><br>" +
  "==============================<br><br>",
  );
};

const commands = {
  dir: {
    description: "Show contents of current directory",
    run: dir
  },
  cd: {
    description: "Change the shell working directory | cd [directory]",
    run: cd
  },
  open: {
    description: "Opens a file | open [file]",
    run: open
  },
  help: {
    description: "Shows all commands",
    run: help
  },
  clear: {
    description: "Clears the terminal",
    run: clear
  },
  whoami: {
    description: "Gives a short blurb about who I am",
    run: whoami
  }
};

let commandHandler = (key) => {
  printBack(`input received: ${key}`);

  printBack(`command = key.trim().toLowerCase()`);
  command = key.trim().toLowerCase();

  //command = ((key.substring(key.indexOf("$") + 2, key.length)).trim().toLowerCase());

  print(key)
  if ( commands[command.replaceAll(" ", "")] ) {

    printBack(`commands[command.replaceAll(" ", "")] -> true`);
    printBack(`setting report to ${command}`);
    
    report.innerText = command;
    
    printBack(`running ${command}`);
    
    (commands[command.replaceAll(" ", "")].run)();
  } else if ( command.substring(0, 3) == ("cd ")) {
    
    printBack(`command.substring(0,3) == ("cd ") -> true`);
    printBack(`running cd(${command.substring(3, key.length)})`);
    
    cd(command.substring(3, key.length));
  
  } else if ( command.substring(0, 5) == "open " ) {
    
    printBack(`command.substring(0,5) == "open " -> true`);
    printBack(`running open(command.substring(5, command.length)`);
    
    open(command.substring(5, command.length));
  
  } else {
    
    printBack(`false`);
    print(`portfolio: ${command}: command not found...`);
  
  }
  printBack(`receipts.scrollTo({top:receipts.scrollHeight, behavior:'smooth'})`);
  receipts.scrollTo({
    top: receipts.scrollHeight,
    behavior: 'smooth'
  })
  printBack(`resetting input.value`);
  input.value = "";
  printBack(`setting prompt.innerHTML to ${prefix}$`);
  prompt.innerHTML = prefix + "$";
  printBack(`resetting report.innerHTML to "~"`);
  report.innerText = "~";

}
printBack(`loading DOM`);
printBack(`DOM loaded`);
printBack(`loading defered scripts`);

printFormat(1, "Hello, welcome to my portfolio! type 'help' to view a list of available commands.");

input.addEventListener("keydown", (e) => { if (e.key === "Enter") { commandHandler(input.value) } });
