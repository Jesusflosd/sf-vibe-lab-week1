import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountExplorerController.getAccounts';

export default class AccountExplorer extends LightningElement {
    allAccounts = [];
    error;
    isLoading = true;
    searchTerm = '';
    sortField = 'Name';
    sortDirection = 'asc';

    @wire(getAccounts)
    wiredAccounts({ data, error }) {
        this.isLoading = false;
        if (data) {
            this.allAccounts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.allAccounts = [];
        }
    }

    handleSearch(event) {
        this.searchTerm = event.target.value.toLowerCase();
    }

    handleSort(event) {
        const field = event.currentTarget.dataset.field;
        if (this.sortField === field) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.sortField = field;
            this.sortDirection = 'asc';
        }
    }

    get filteredAccounts() {
        let result = this.allAccounts;

        if (this.searchTerm) {
            result = result.filter(acc =>
                (acc.Name || '').toLowerCase().includes(this.searchTerm) ||
                (acc.Industry || '').toLowerCase().includes(this.searchTerm)
            );
        }

        const field = this.sortField;
        const direction = this.sortDirection === 'asc' ? 1 : -1;
        result = [...result].sort((a, b) => {
            const valA = (a[field] || '').toString().toLowerCase();
            const valB = (b[field] || '').toString().toLowerCase();
            if (valA < valB) return -1 * direction;
            if (valA > valB) return 1 * direction;
            return 0;
        });

        return result;
    }

    get hasAccounts() {
        return this.filteredAccounts.length > 0;
    }

    get showEmptyState() {
        return !this.isLoading && !this.hasAccounts;
    }
}