export function load() {
  return {
    form: {
      name: "testform",
      group: "testgroup",
      sections: [
        {
          type: "select-box",
          title: "What initially caused you skill issue to occur?",
          required: false,
          description: "",
          options: [
            {
              id: 1,
              label: "Dev bias",
              state: false,
              inputField: true,
              inputText: ""
            },
            {
              id: 2,
              label: "Clan man bad/toxic",
              state: false,
              inputField: false,
              inputText: ""
            }
          ]
        },
        {
          type: "select-box",
          title: "What initially caused you skill issue to occur?",
          required: false,
          description: "",
          options: [
            {
              id: 1,
              label: "Dev bias 2",
              state: false,
              inputField: true,
              inputText: ""
            },
            {
              id: 2,
              label: "Clan man bad/toxic 2",
              state: false,
              inputField: false,
              inputText: ""
            }
          ]
        }
      ]
    }
  }
}