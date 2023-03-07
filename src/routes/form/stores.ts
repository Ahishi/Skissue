import { writable } from "svelte/store";

export const form =
  writable(
    {
      name: "preset",
      group: "testgroup",
      contact: {
        steam: "",
        time: "",
        date: ""
      },
      sections: [
        {
          id: 1,
          type: "select-box",
          title: "What initially caused you skill issue to occur?",
          required: false,
          options: [
            {
              id: 0,
              label: "1",
              state: true,
              inputField: true,
              inputText: ""
            },
            {
              id: 1,
              label: "2",
              state: false,
              inputField: false,
              inputText: ""
            },
            {
              id: 2,
              label: "3",
              state: false,
              inputField: false,
              inputText: ""
            },
            {
              id: 3,
              label: "4",
              state: false,
              inputField: false,
              inputText: ""
            },
            {
              id: 4,
              label: "5",
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
          type: "select-box-small",
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
          id: 4,
          type: "radio-buttons",
          title: "What initially caused you skill issue to occur?",
          required: false,
          description: "",
          options: [
            {
              id: 1,
              label: "Dev bias 2",
              state: false
            },
            {
              id: 2,
              label: "Clan man bad/toxic 2",
              state: false
            }
          ]
        },
        {
          id: 5,
          type: "text-area",
          title: "What initially caused you skill issue to occur?",
          required: false
        }
      ]
    });