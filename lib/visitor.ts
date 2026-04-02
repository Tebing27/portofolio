import { v4 as uuidv4 } from "uuid";

const Visitor_ID_KEY = "visitor-id";

export function getCreateVisitorId(): string {
  let visitorId = localStorage.getItem(Visitor_ID_KEY);

  if (!visitorId) {
    visitorId = uuidv4();
    localStorage.setItem(Visitor_ID_KEY, visitorId);
  }
  return visitorId;
}
