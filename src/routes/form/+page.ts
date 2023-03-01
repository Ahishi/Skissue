export function load() {
  return {
    form: {
      name: "testform",
      group: "testgroup",
      contact: {
        steam: "tester",
        time: "11:11",
        date: "01/11/2022",
      },
      sections: [
        {
          id: 1,
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
          id: 2,
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
        },
        {
          id: 3,
          type: "radio-buttons",
          title: "What initially caused you skill issue to occur?",
          required: false,
          description: "",
          options: [
            {
              id: 1,
              label: "Dev bias 2",
              state: false,
            },
            {
              id: 2,
              label: "Clan man bad/toxic 2",
              state: false,
            }
          ]
        },
        {
          id: 4,
          type: "text-area",
          title: "What initially caused you skill issue to occur?",
          required: false,
        }
      ]
    }
  }
}