import { defineEventHandler } from "h3";
import Airtable from "airtable";

const airtable = new Airtable({ apiKey: process.env.AIRTAIBLE_API_KEY });

const records = await airtable
  .base("appPvmwKKIiUVz7Z5")
  .table("240511-schonach")
  .select({ view: "viwZ9ZZhBvXLbKstw" })
  .firstPage();

export default defineEventHandler(async (event) => records.length);
