# SF Vibe Lab - Week 1 - Professional Readiness Sprint

This repository contains two applications built for the Week 1 Professional Readiness Sprint:

1. **salesforce-project/** — A Salesforce DX project with a connected org, an Apex controller, and a Lightning Web Component (Account Explorer) that displays real Account records.
2. **react-app/** — A standalone React application that displays Account data from a local JSON file, with no live Salesforce connection.

## Salesforce Project (salesforce-project/)

### What it does
- Connects to a Salesforce sandbox org
- Queries Account records (Name, Industry, Phone)
- Includes an `AccountExplorerController` Apex class exposing a cacheable method to fetch Accounts
- Includes an `accountExplorer` Lightning Web Component that displays Accounts in a searchable, sortable table, with loading and empty states
- Deployed and tested on a Lightning App Page

### How to install and run
1. Install [Salesforce CLI](https://developer.salesforce.com/tools/salesforcecli) and [VS Code](https://code.visualstudio.com/) with the Salesforce Extension Pack.
2. Clone this repository and open the `salesforce-project` folder:

git clone https://github.com/Jesusflosd/sf-vibe-lab-week1.git
cd sf-vibe-lab-week1/salesforce-project

3. Authenticate to your own Salesforce org (use `--instance-url https://test.salesforce.com` if connecting to a sandbox):

sf org login web --alias myOrg --set-default

4. Deploy the Apex class and the LWC to your org:

sf project deploy start --source-dir force-app/main/default/classes/AccountExplorerController.cls --target-org myOrg
sf project deploy start --source-dir force-app/main/default/lwc/accountExplorer --target-org myOrg

5. (Optional, if your org has no Account data yet) Create a few sample Accounts, either through the UI (New → Organization record type → fill Name, Industry, Phone) or via CLI:

sf data create record --sobject Account --values "Name='Acme Corp' Industry='Technology' Phone='555-0100'" --target-org myOrg

6. In your org, go to **Setup → Lightning App Builder**, create a new App Page (or edit an existing one), drag the `accountExplorer` component onto it, then **Save** and **Activate**.
7. Open the page — you should see a table of Accounts with a search bar and sortable columns.

## React App (react-app/)

### What it does
- Displays Account data (Name, Industry, Phone) read from a local `Account_Sample_Data.json` file
- No live Salesforce connection of any kind
- Includes search/filter by Name or Industry, sorting by Name or Industry, an empty state, and basic styling

### How to install and run
1. From the repository root, move into the React app folder:

cd react-app

2. Install dependencies:

npm install

3. Start the development server:

npm start

4. Open [http://localhost:3000](http://localhost:3000) in your browser — you should see 8 sample accounts, a search box, and sort buttons.

## How I built this

I built two separate applications for this sprint.

The first is an **Account Explorer LWC**, deployed inside my Salesforce sandbox. It uses real Account records from my org and displays them with the Name, Industry, and Phone fields. An Apex controller (`AccountExplorerController`) queries the Account records, and the Lightning Web Component (`accountExplorer`) renders them in a table. The component includes a search bar that filters by Name or Industry, sorting by clicking the column headers, a loading spinner while the data is being fetched, and an empty state message when a search returns no matches.

The second is a **React Account Explorer**, built to run entirely locally. It follows the same account-browsing idea as the LWC, but instead of connecting to Salesforce, it reads account data from a local `Account_Sample_Data.json` file. It runs with `npm start` and includes a search option that filters by Name or Industry, plus a sort option that can reorder the list by Name or Industry.