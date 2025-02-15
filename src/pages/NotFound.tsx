import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <p>This route not found, come back to <Link to="/" className="text-red-500 underline">home</Link></p>
  )
}