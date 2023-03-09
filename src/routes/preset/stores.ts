import { writable } from "svelte/store";

export const form =
  writable(
    {
      name: "preset",
      group: "",
      color: "#CC397B",
      contact: {
        steam: "",
        time: "",
        date: ""
      },
      sections: []
    });