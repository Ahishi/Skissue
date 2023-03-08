import { derived, readable, writable } from "svelte/store";
import { auth, db } from "../../firebase";
import { collection, getDocs, query } from "firebase/firestore/lite";


export const term = writable("");

//Form derivated search

// export const forms = loadedForms

/*if(loadedForms != null){
  forms = derived(
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
}*/