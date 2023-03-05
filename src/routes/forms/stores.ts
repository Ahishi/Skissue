import { derived, writable } from "svelte/store";

export const term = writable("");

export const loadedForms =
  writable([
    {
      name: "Testform 1 dsadsadsadasdasdasdasdsadsadsa",
      group: "yeet",
      groupColor: "#000000",
      creator: "",
      color: "#d14d89"
    },
    {
      name: "Testform 2",
      group: "yeet",
      groupColor: "#000000",
      creator: "yeetman",
      color: "#dc76a4"
    },
    {
      name: "Testform 3",
      group: "yeet",
      groupColor: "#000000",
      creator: "",
      color: "#932657"
    },
    {
      name: "Testform 4",
      group: "",
      groupColor: "",
      creator: "",
      color: "#932657"
    },
    {
      name: "Testform 1 dsadsadsadasdasdasdasdsadsadsa",
      group: "",
      groupColor: "",
      creator: "",
      color: "#d14d89"
    },
    {
      name: "Testform 2",
      group: "",
      groupColor: "",
      creator: "",
      color: "#dc76a4"
    },
    {
      name: "Testform 3",
      group: "yeet",
      groupColor: "#000000",
      creator: "",
      color: "#932657"
    },
    {
      name: "Testform 4",
      group: "",
      groupColor: "",
      creator: "",
      color: "#932657"
    }
  ]);

export const forms = derived(
  [term, loadedForms],
  ([$term, $items]) =>
    $items.filter(x => {
      let lowerTerm = $term.toLowerCase().replace(/\s/g, "");

      if (lowerTerm.includes("group:")) {
        const regex = /group:/i;
        lowerTerm = lowerTerm.replace(regex, "")
        return x.group.toLowerCase().replace(/\s/g, "").includes(lowerTerm)
      }
      if (lowerTerm.includes("creator:")) {
        const regex = /creator:/i;
        lowerTerm = lowerTerm.replace(regex, "")
        return x.creator.toLowerCase().replace(/\s/g, "").includes(lowerTerm);
      }
      return x.name.toLowerCase().replace(/\s/g, "").includes(lowerTerm)
    })
);