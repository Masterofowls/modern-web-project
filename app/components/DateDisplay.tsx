import { format } from "date-fns"

export default function DateDisplay({ date }: { date: Date }) {
  return (
    <div>
      <p>Formatted Date: {format(date, "MMMM dd, yyyy")}</p>
    </div>
  )
}

