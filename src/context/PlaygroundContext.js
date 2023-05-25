import { createContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
export const PlaygroundContext = createContext();
//createion
//providing value = {things that we need in every other object}  we make a object
// wrapping app/ main file with provider
// using

export const languageMap = {
  cpp: {
    id: 54, //these Id's will be used in callling api's
    defaultCode:
      "#include<iostream>\n" +
      "#include <bits/stdc++.h>\n" +
      "using namespace std; \n\n" +
      '\tcout << "Hello World!" \n' +
      "\treturn 0;\n" +
      "}",
  },
  java: {
    id: 62, //these Id's will be used in callling api's
    defaultCode: `public class Main {
        public static void main(String[] args){
System.out.println("Hello World!");
        }
    }`,
  },
  python: {
    id: 71, //these Id's will be used in callling api's
    defaultCode: `print("Hello World!")`,
  },
  javascript: {
    id: 63,
    defaultCode: `console.log("Hellow World!")`,
  },
};
const PlaygroundProvider = ({ children }) => {
  const initialItems = {
    [uuid()]: {
      title: "DSA",
      playgrounds: {
        [uuid()]: {
          code: languageMap["cpp"].defaultCode,
          title: "Queue Implementation",
          language: "cpp",
        },
        [uuid()]: {
          code: languageMap["java"].defaultCode,
          title: "Stack Implementation",
          language: "cpp",
        },
      },
    },
  };

  const [folders, setFolders] = useState(() => {
    let localData = localStorage.getItem("Playground-Data"); //getting folder
    if (localData == null || localData == undefined) {
      return initialItems;
    }
    return JSON.parse(localData);
  });

  useEffect(() => {
    localStorage.setItem("playGround-data", JSON.stringify(folders)); //udatinf folder
  }, [folders]);

  const deleteFolder = (folderId) => {
    //New State with deleted folder with given ID
    setFolders((oldState) => {
      const newState = { ...oldState };
      delete newState[folderId];
      return newState;
    });
  };
  const deleteCard = (folderId, cardID) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      delete newState[folderId].playgrounds[cardID];
      return newState;
    });
  };

  const addFolder = (folderName) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[uuid()] = {
        title: folderName,
        playgrounds: {},
      };
      return newState;
    });
  };

  const addPlayground = (folderId, playgroundName, language) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[folderId].playgrounds[uuid()] = {
        title: playgroundName,
        language: language,
        code: languageMap[language].defaultCode,
      };
      return newState;
    });
  };

  const addPlaygroundAndFolder = (folderName, playgroundName, cardLanguage) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[uuid()] = {
        title: folderName,
        playgrounds: {
          [uuid()]: {
            title: playgroundName,
            language: cardLanguage,
            code: languageMap[cardLanguage].defaultCode,
          },
        },
      };
      return newState;
    });
  };

  const editFolderTitle = (folderId, newFolderTitle) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[folderId].title = newFolderTitle;
      return newState;
    });
  };

  const editCardTitle = (folderId, cardID, newCardTitle) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[folderId].playgrounds[cardID].title = newCardTitle;
      return newState;
    });
  };

  const savePlayground = (folderId, cardID, newCode, newLanguage) => {
    setFolders((oldState) => {
      const newState = { ...oldState };
      newState[folderId].playgrounds[cardID].code = newCode;
      newState[folderId].playgrounds[cardID].language = newLanguage;
      return newState;
    });
  };

  const playgroundFeatures = {
    folders,
    editCardTitle,
    editFolderTitle,
    savePlayground,
    addPlaygroundAndFolder,
    addPlayground,
    addFolder,
    deleteCard,
    deleteFolder,
  };

  return (
    <PlaygroundContext.Provider value={playgroundFeatures}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export default PlaygroundProvider;
