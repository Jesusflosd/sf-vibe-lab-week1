# AI Work Log

**Tool used:** Claude (Anthropic)

---

**Entry 1 — Connected Salesforce Project**

*Prompt:* Asked for help connecting the Salesforce CLI to a class-provided sandbox org and confirming the connection worked.

*Problem:* Running `sf project retrieve start` failed with a `noSourceTracking` error, since the sandbox doesn't support automatic source tracking.

*How I checked/fixed it:* Re-ran the command with an explicit metadata flag (`sf project retrieve start --metadata CustomObject:Account --target-org classOrg`), which completed successfully and confirmed the deploy/retrieve connection to the org.

---

**Entry 2 — Account Explorer LWC**

*Prompt:* Asked for help building the Apex controller and LWC to display Account records with search, sort, loading, and empty states.

*Problem:* The Industry field wasn't showing up on the "New Account" form for the Organization record type, so I couldn't set that field when creating sample Accounts.

*How I checked/fixed it:* Checked Object Manager and confirmed the field existed on the Account object but was missing from the Page Layout assigned to that record type. Added the field to the layout myself, which fixed the issue.

---

**Entry 3 — Documentation**

*Prompt:* Asked for help structuring and drafting the README.md (install/run instructions for both apps, "How I built this" section) and this AI work log.

*Problem:* My first draft of the README was missing the install and run instructions for both applications — only had a placeholder for the build explanation.

*How I checked/fixed it:* Reviewed the README section by section and added the missing installation and run steps for both the Salesforce project and the React app, then verified the final file rendered correctly on GitHub.

---

**How I verified the final work:** Ran `sf data query` to confirm Account records existed with correct data, deployed the Apex class and LWC with `sf project deploy start` and confirmed successful output, opened the Lightning page to confirm the LWC displayed real data with working search and sort, and ran `npm start` on the React app to confirm it loaded the local JSON with working search, sort, and empty state.