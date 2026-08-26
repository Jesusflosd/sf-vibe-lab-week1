public with sharing class AccountExplorerController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        return [
            SELECT Id, Name, Industry, Phone
            FROM Account
            ORDER BY Name ASC
            LIMIT 200
        ];
    }
}