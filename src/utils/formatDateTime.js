import { DateTime } from "luxon"
export default function formatDateTime(secs, offset, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") {
    return DateTime.fromSeconds(secs + offset, { zone: "utc" }).toFormat(format);
}