import { defineEventHandler } from "h3";
import Airtable from "airtable";

const airtable = new Airtable({ apiKey: process.env.AIRTAIBLE_API_KEY });

export default defineEventHandler(async (event) => {
  const requestedSlug = getRouterParam(event, "slug.json").split(".")[0];

  const records = await airtable
    .base("appPvmwKKIiUVz7Z5")
    .table(requestedSlug)
    .select({ view: "website" })
    .firstPage();

  return records.length;
});
