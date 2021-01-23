import { cecilianSearchQuery, cecilianCreationMutation } from "./gql/cecilian";
import { yearSearchQuery, yearCreationMutation } from "./gql/year";
import {
  formatCecilianAsOption,
  formatCecilianForInput,
} from "./helpers/formatCecilian";
import { formatYearAsOption, formatYearForInput } from "./helpers/formatYear";
import { FaRegUserCircle } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";

const tagTypeMap = {
  cecilian: {
    searchQuery: cecilianSearchQuery,
    creationMutation: cecilianCreationMutation,
    optionFormatter: formatCecilianAsOption,
    inputFormatter: formatCecilianForInput,
    fallbackIcon: FaRegUserCircle,
  },
  year: {
    searchQuery: yearSearchQuery,
    creationMutation: yearCreationMutation,
    optionFormatter: formatYearAsOption,
    inputFormatter: formatYearForInput,
    fallbackIcon: BiCalendar,
  },
  event: {},
  role: {},
};

export default tagTypeMap;
