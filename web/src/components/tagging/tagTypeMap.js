import { cecilianSearchQuery, cecilianCreationMutation } from "./gql/cecilian";
import { yearSearchQuery, yearCreationMutation } from "./gql/year";
import { eventSearchQuery, eventCreationMutation } from "./gql/event";
import { roleSearchQuery, roleCreationMutation } from "./gql/role";
import {
  formatCecilianAsOption,
  formatCecilianForInput,
} from "./helpers/formatCecilian";
import { formatYearAsOption, formatYearForInput } from "./helpers/formatYear";
import {
  formatEventAsOption,
  formatEventForInput,
} from "./helpers/formatEvent";
import { formatRoleAsOption, formatRoleForInput } from "./helpers/formatRole";
import { FaRegUserCircle, FaTicketAlt } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { GiPerson } from "react-icons/gi";

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
  event: {
    searchQuery: eventSearchQuery,
    creationMutation: eventCreationMutation,
    optionFormatter: formatEventAsOption,
    inputFormatter: formatEventForInput,
    fallbackIcon: FaTicketAlt,
  },
  role: {
    searchQuery: roleSearchQuery,
    creationMutation: roleCreationMutation,
    optionFormatter: formatRoleAsOption,
    inputFormatter: formatRoleForInput,
    fallbackIcon: GiPerson,
  },
};

export default tagTypeMap;
