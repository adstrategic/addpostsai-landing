type AirtableRecord = {
  fields: Record<string, string>
}

export async function addEmailToWaitlist(email: string): Promise<void> {
  const apiKey = process.env.AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName = process.env.AIRTABLE_TABLE_NAME

  if (!apiKey || !baseId || !tableName) {
    throw new Error("Airtable environment variables are not configured")
  }

  const emailField = process.env.AIRTABLE_EMAIL_FIELD ?? "Email"
  const dateField = process.env.AIRTABLE_DATE_FIELD ?? "Signed Up At"

  const record: AirtableRecord = {
    fields: {
      [emailField]: email,
      [dateField]: new Date().toISOString(),
    },
  }

  const response = await fetch(
    `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [record] }),
    }
  )

  if (!response.ok) {
    const errorBody = await response.text()
    console.error("Airtable API error:", response.status, errorBody)
    throw new Error("Failed to save email to Airtable")
  }
}
