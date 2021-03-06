import { element, by, ElementFinder } from 'protractor';

export class UserDetailsComponentsPage {
    createButton = element(by.id('jh-create-entity'));
    deleteButtons = element.all(by.css('jhi-user-details-mpm div table .btn-danger'));
    title = element.all(by.css('jhi-user-details-mpm div h2#page-heading span')).first();

    async clickOnCreateButton() {
        await this.createButton.click();
    }

    async clickOnLastDeleteButton() {
        await this.deleteButtons.last().click();
    }

    async countDeleteButtons() {
        return this.deleteButtons.count();
    }

    async getTitle() {
        return this.title.getAttribute('jhiTranslate');
    }
}

export class UserDetailsUpdatePage {
    pageTitle = element(by.id('jhi-user-details-mpm-heading'));
    saveButton = element(by.id('save-entity'));
    cancelButton = element(by.id('cancel-save'));
    userSelect = element(by.id('field_user'));
    teamSelect = element(by.id('field_team'));

    async getPageTitle() {
        return this.pageTitle.getAttribute('jhiTranslate');
    }

    async userSelectLastOption() {
        await this.userSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async userSelectOption(option) {
        await this.userSelect.sendKeys(option);
    }

    getUserSelect(): ElementFinder {
        return this.userSelect;
    }

    async getUserSelectedOption() {
        return this.userSelect.element(by.css('option:checked')).getText();
    }

    async teamSelectLastOption() {
        await this.teamSelect
            .all(by.tagName('option'))
            .last()
            .click();
    }

    async teamSelectOption(option) {
        await this.teamSelect.sendKeys(option);
    }

    getTeamSelect(): ElementFinder {
        return this.teamSelect;
    }

    async getTeamSelectedOption() {
        return this.teamSelect.element(by.css('option:checked')).getText();
    }

    async save() {
        await this.saveButton.click();
    }

    async cancel() {
        await this.cancelButton.click();
    }

    getSaveButton(): ElementFinder {
        return this.saveButton;
    }
}

export class UserDetailsDeleteDialog {
    private dialogTitle = element(by.id('jhi-delete-userDetails-heading'));
    private confirmButton = element(by.id('jhi-confirm-delete-userDetails'));

    async getDialogTitle() {
        return this.dialogTitle.getAttribute('jhiTranslate');
    }

    async clickOnConfirmButton() {
        await this.confirmButton.click();
    }
}
