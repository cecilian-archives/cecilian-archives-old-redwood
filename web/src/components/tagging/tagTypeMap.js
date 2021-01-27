import { cecilianSearchQuery, cecilianCreationMutation } from "./gql/cecilian";
import { yearSearchQuery, yearCreationMutation } from "./gql/year";
import { eventSearchQuery, eventCreationMutation } from "./gql/event";
import { roleSearchQuery, roleCreationMutation } from "./gql/role";
import {
  formatCecilianAsOption,
  formatCecilianForInput,
  cecilianSelectionSorter,
} from "./helpers/formatCecilian";
import {
  formatYearAsOption,
  formatYearForInput,
  yearSelectionSorter,
} from "./helpers/formatYear";
import {
  formatEventAsOption,
  formatEventForInput,
  eventSelectionSorter,
} from "./helpers/formatEvent";
import {
  formatRoleAsOption,
  formatRoleForInput,
  roleSelectionSorter,
} from "./helpers/formatRole";
import { FaRegUserCircle, FaTicketAlt } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { GiPerson } from "react-icons/gi";

const tagTypeMap = {
  cecilian: {
    searchQuery: cecilianSearchQuery,
    creationMutation: cecilianCreationMutation,
    optionFormatter: formatCecilianAsOption,
    inputFormatter: formatCecilianForInput,
    selectionSorter: cecilianSelectionSorter,
    fallbackIcon: FaRegUserCircle,
  },
  year: {
    searchQuery: yearSearchQuery,
    creationMutation: yearCreationMutation,
    optionFormatter: formatYearAsOption,
    inputFormatter: formatYearForInput,
    selectionSorter: yearSelectionSorter,
    fallbackIcon: BiCalendar,
  },
  event: {
    searchQuery: eventSearchQuery,
    creationMutation: eventCreationMutation,
    optionFormatter: formatEventAsOption,
    inputFormatter: formatEventForInput,
    selectionSorter: eventSelectionSorter,
    fallbackIcon: FaTicketAlt,
  },
  role: {
    searchQuery: roleSearchQuery,
    creationMutation: roleCreationMutation,
    optionFormatter: formatRoleAsOption,
    inputFormatter: formatRoleForInput,
    selectionSorter: roleSelectionSorter,
    fallbackIcon: GiPerson,
  },
};

export default tagTypeMap;
